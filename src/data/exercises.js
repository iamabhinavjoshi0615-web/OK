const exercises = [
  // CHEST
  { id: "0001", name: "Barbell Bench Press", bodyPart: "chest", target: "pectorals", equipment: "barbell", gifUrl: "" },
  { id: "0002", name: "Dumbbell Fly", bodyPart: "chest", target: "pectorals", equipment: "dumbbell", gifUrl: "" },
  { id: "0003", name: "Push-Up", bodyPart: "chest", target: "pectorals", equipment: "body weight", gifUrl: "" },
  { id: "0004", name: "Cable Crossover", bodyPart: "chest", target: "pectorals", equipment: "cable", gifUrl: "" },
  { id: "0005", name: "Incline Barbell Press", bodyPart: "chest", target: "pectorals", equipment: "barbell", gifUrl: "" },
  { id: "0006", name: "Decline Push-Up", bodyPart: "chest", target: "pectorals", equipment: "body weight", gifUrl: "" },
  { id: "0007", name: "Chest Dip", bodyPart: "chest", target: "pectorals", equipment: "body weight", gifUrl: "" },
  { id: "0008", name: "Pec Deck Fly", bodyPart: "chest", target: "pectorals", equipment: "machine", gifUrl: "" },
  // BACK
  { id: "0009", name: "Pull-Up", bodyPart: "back", target: "lats", equipment: "body weight", gifUrl: "" },
  { id: "0010", name: "Barbell Deadlift", bodyPart: "back", target: "spine", equipment: "barbell", gifUrl: "" },
  { id: "0011", name: "Bent Over Row", bodyPart: "back", target: "upper back", equipment: "barbell", gifUrl: "" },
  { id: "0012", name: "Lat Pulldown", bodyPart: "back", target: "lats", equipment: "cable", gifUrl: "" },
  { id: "0013", name: "Seated Cable Row", bodyPart: "back", target: "middle back", equipment: "cable", gifUrl: "" },
  { id: "0014", name: "Single-Arm Dumbbell Row", bodyPart: "back", target: "lats", equipment: "dumbbell", gifUrl: "" },
  { id: "0015", name: "Barbell Shrug", bodyPart: "back", target: "traps", equipment: "barbell", gifUrl: "" },
  { id: "0016", name: "Hyperextension", bodyPart: "back", target: "spine", equipment: "body weight", gifUrl: "" },
  // SHOULDERS
  { id: "0017", name: "Barbell Overhead Press", bodyPart: "shoulders", target: "delts", equipment: "barbell", gifUrl: "" },
  { id: "0018", name: "Dumbbell Lateral Raise", bodyPart: "shoulders", target: "delts", equipment: "dumbbell", gifUrl: "" },
  { id: "0019", name: "Dumbbell Front Raise", bodyPart: "shoulders", target: "delts", equipment: "dumbbell", gifUrl: "" },
  { id: "0020", name: "Rear Delt Fly", bodyPart: "shoulders", target: "delts", equipment: "dumbbell", gifUrl: "" },
  { id: "0021", name: "Arnold Press", bodyPart: "shoulders", target: "delts", equipment: "dumbbell", gifUrl: "" },
  { id: "0022", name: "Upright Row", bodyPart: "shoulders", target: "delts", equipment: "barbell", gifUrl: "" },
  { id: "0023", name: "Cable Lateral Raise", bodyPart: "shoulders", target: "delts", equipment: "cable", gifUrl: "" },
  { id: "0024", name: "Face Pull", bodyPart: "shoulders", target: "delts", equipment: "cable", gifUrl: "" },
  // UPPER ARMS
  { id: "0025", name: "Barbell Bicep Curl", bodyPart: "upper arms", target: "biceps brachii", equipment: "barbell", gifUrl: "" },
  { id: "0026", name: "Hammer Curl", bodyPart: "upper arms", target: "biceps brachii", equipment: "dumbbell", gifUrl: "" },
  { id: "0027", name: "Preacher Curl", bodyPart: "upper arms", target: "biceps brachii", equipment: "barbell", gifUrl: "" },
  { id: "0028", name: "Tricep Pushdown", bodyPart: "upper arms", target: "triceps brachii", equipment: "cable", gifUrl: "" },
  { id: "0029", name: "Skull Crusher", bodyPart: "upper arms", target: "triceps brachii", equipment: "barbell", gifUrl: "" },
  { id: "0030", name: "Close Grip Bench Press", bodyPart: "upper arms", target: "triceps brachii", equipment: "barbell", gifUrl: "" },
  { id: "0031", name: "Concentration Curl", bodyPart: "upper arms", target: "biceps brachii", equipment: "dumbbell", gifUrl: "" },
  { id: "0032", name: "Overhead Tricep Extension", bodyPart: "upper arms", target: "triceps brachii", equipment: "dumbbell", gifUrl: "" },
  // LOWER ARMS
  { id: "0033", name: "Wrist Curl", bodyPart: "lower arms", target: "forearm flexors", equipment: "barbell", gifUrl: "" },
  { id: "0034", name: "Reverse Wrist Curl", bodyPart: "lower arms", target: "forearm extensors", equipment: "barbell", gifUrl: "" },
  { id: "0035", name: "Farmer's Walk", bodyPart: "lower arms", target: "forearm flexors", equipment: "dumbbell", gifUrl: "" },
  { id: "0036", name: "Reverse Curl", bodyPart: "lower arms", target: "brachioradialis", equipment: "barbell", gifUrl: "" },
  // UPPER LEGS
  { id: "0037", name: "Barbell Squat", bodyPart: "upper legs", target: "quads", equipment: "barbell", gifUrl: "" },
  { id: "0038", name: "Leg Press", bodyPart: "upper legs", target: "quads", equipment: "machine", gifUrl: "" },
  { id: "0039", name: "Barbell Lunge", bodyPart: "upper legs", target: "quads", equipment: "barbell", gifUrl: "" },
  { id: "0040", name: "Romanian Deadlift", bodyPart: "upper legs", target: "hamstrings", equipment: "barbell", gifUrl: "" },
  { id: "0041", name: "Leg Extension", bodyPart: "upper legs", target: "quads", equipment: "machine", gifUrl: "" },
  { id: "0042", name: "Lying Leg Curl", bodyPart: "upper legs", target: "hamstrings", equipment: "machine", gifUrl: "" },
  { id: "0043", name: "Hack Squat", bodyPart: "upper legs", target: "quads", equipment: "barbell", gifUrl: "" },
  { id: "0044", name: "Sumo Squat", bodyPart: "upper legs", target: "glutes", equipment: "barbell", gifUrl: "" },
  // LOWER LEGS
  { id: "0045", name: "Standing Calf Raise", bodyPart: "lower legs", target: "gastrocnemius", equipment: "body weight", gifUrl: "" },
  { id: "0046", name: "Seated Calf Raise", bodyPart: "lower legs", target: "soleus", equipment: "machine", gifUrl: "" },
  { id: "0047", name: "Box Jump", bodyPart: "lower legs", target: "gastrocnemius", equipment: "body weight", gifUrl: "" },
  { id: "0048", name: "Single-Leg Calf Raise", bodyPart: "lower legs", target: "gastrocnemius", equipment: "body weight", gifUrl: "" },
  // WAIST (CORE)
  { id: "0049", name: "Crunch", bodyPart: "waist", target: "abs", equipment: "body weight", gifUrl: "" },
  { id: "0050", name: "Plank", bodyPart: "waist", target: "abs", equipment: "body weight", gifUrl: "" },
  { id: "0051", name: "Russian Twist", bodyPart: "waist", target: "obliques", equipment: "body weight", gifUrl: "" },
  { id: "0052", name: "Bicycle Crunch", bodyPart: "waist", target: "obliques", equipment: "body weight", gifUrl: "" },
  { id: "0053", name: "Leg Raise", bodyPart: "waist", target: "abs", equipment: "body weight", gifUrl: "" },
  { id: "0054", name: "Mountain Climber", bodyPart: "waist", target: "abs", equipment: "body weight", gifUrl: "" },
  { id: "0055", name: "Cable Crunch", bodyPart: "waist", target: "abs", equipment: "cable", gifUrl: "" },
  { id: "0056", name: "Hanging Knee Raise", bodyPart: "waist", target: "abs", equipment: "body weight", gifUrl: "" },
  // CARDIO
  { id: "0057", name: "Jumping Jacks", bodyPart: "cardio", target: "cardiovascular system", equipment: "body weight", gifUrl: "" },
  { id: "0058", name: "Burpee", bodyPart: "cardio", target: "cardiovascular system", equipment: "body weight", gifUrl: "" },
  { id: "0059", name: "High Knees", bodyPart: "cardio", target: "cardiovascular system", equipment: "body weight", gifUrl: "" },
  { id: "0060", name: "Jump Rope", bodyPart: "cardio", target: "cardiovascular system", equipment: "body weight", gifUrl: "" },
  { id: "0061", name: "Treadmill Run", bodyPart: "cardio", target: "cardiovascular system", equipment: "cardio", gifUrl: "" },
  { id: "0062", name: "Rowing Machine", bodyPart: "cardio", target: "cardiovascular system", equipment: "cardio", gifUrl: "" },
  { id: "0063", name: "Cycling", bodyPart: "cardio", target: "cardiovascular system", equipment: "cardio", gifUrl: "" },
  { id: "0064", name: "Elliptical Trainer", bodyPart: "cardio", target: "cardiovascular system", equipment: "cardio", gifUrl: "" },
  // NECK
  { id: "0065", name: "Neck Flexion", bodyPart: "neck", target: "sternocleidomastoid", equipment: "body weight", gifUrl: "" },
  { id: "0066", name: "Neck Extension", bodyPart: "neck", target: "trapezius", equipment: "body weight", gifUrl: "" },
  { id: "0067", name: "Neck Lateral Flexion", bodyPart: "neck", target: "sternocleidomastoid", equipment: "body weight", gifUrl: "" },
  { id: "0068", name: "Neck Rotation", bodyPart: "neck", target: "sternocleidomastoid", equipment: "body weight", gifUrl: "" },
];

export const bodyParts = ['all', ...new Set(exercises.map((e) => e.bodyPart))];

export default exercises;
