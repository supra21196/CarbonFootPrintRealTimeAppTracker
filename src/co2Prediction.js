import * as tf from "@tensorflow/tfjs";

// Simulated Training Data (distance traveled → CO₂ emissions)
const trainingData = {
  input: [1, 5, 10, 20, 50, 100], // Distance in km
  output: [0.2, 1, 2, 4, 10, 20], // Emissions in kg (approximated)
};

let model;

/// Train AI Model
const trainModel = async () => {
  model = tf.sequential();
  model.add(tf.layers.dense({ units: 1, inputShape: [1] }));
  model.compile({ optimizer: tf.train.sgd(0.01), loss: "meanSquaredError" });

  // Normalize training data
  const xs = tf.tensor2d(
    trainingData.input.map((x) => x / 100),
    [trainingData.input.length, 1]
  ); // Scale input
  const ys = tf.tensor2d(
    trainingData.output.map((y) => y / 20),
    [trainingData.output.length, 1]
  ); // Scale output

  console.log("📊 Training AI Model...");
  await model.fit(xs, ys, { epochs: 500 });

  console.log("✅ Model Trained!");
  console.log("✅ Model Summary:");
  model.summary();
};

export const predictAIEmissions = async (transport, distance) => {
  if (!model) await trainModel();

  console.log("🚀 Predicting AI Emissions for:", { transport, distance });

  const validDistance = parseFloat(distance);
  if (isNaN(validDistance) || validDistance <= 0) {
    console.error("❌ Invalid distance input:", distance);
    return "0.00"; // Prevent NaN
  }

  // Normalize distance
  const inputTensor = tf.tensor2d([validDistance / 100], [1, 1]);
  console.log("🔍 Normalized Input Tensor:", inputTensor.arraySync());

  const prediction = model.predict(inputTensor);
  const emission = prediction.dataSync()[0] * 20; // Reverse scaling

  console.log("🔍 Raw Model Prediction:", emission);

  if (!prediction || isNaN(emission)) {
    console.error("❌ Model returned NaN! Check training data or model.");
    return "0.00";
  }

  // Adjust based on transport type
  const transportFactors = {
    car: 1.0,
    bike: 0.05,
    walk: 0,
    publicTransport: 0.2,
  };

  const finalEmission = (emission * (transportFactors[transport] || 1)).toFixed(
    2
  );
  console.log("✅ AI-predicted CO₂ emission:", finalEmission);

  return finalEmission;
};
