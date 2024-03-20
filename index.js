function returnsANamedFunction() {
    return function namedFunction() {
      console.log("I'm a named function!");
    };
  }

  const beforeAllHook = returnsANamedFunction();
  beforeAllHook();

  function runFiveMiles() {
    console.log("Go for a five-mile run");
  }
  
  function liftWeights() {
    console.log("Pump iron");
  }
  
  function swimFortyLaps() {
    console.log("Swim 40 laps");
  }
  
  function Monday() {
    runFiveMiles();
    liftWeights();
  }
  
  function exerciseRoutine(postRunActivity) {
    runFiveMiles();
    postRunActivity();
  }
  
  function Monday() {
    exerciseRoutine(liftWeights);
  }
  
  function exerciseRoutine(postRunActivity) {
    runFiveMiles();
    postRunActivity();
  }
  
  exerciseRoutine(() => {
    console.log("Stretch! Work that core!");
  });
  
  exerciseRoutine(() => console.log("Stretch! Work that core!"));
  
  function morningRoutine(exercise) {
    let breakfast;
  
    if (exercise === liftWeights) {
      breakfast = "protein bar";
    } else if (exercise === swimFortyLaps) {
      breakfast = "kale smoothie";
    } else {
      breakfast = "granola";
    }
  
    exerciseRoutine(exercise);
  
    return function () {
      console.log(`Nom nom nom, this ${breakfast} is delicious!`);
    };
  }
  
  function receivesAFunction(callback) {
    callback();
  }

  receivesAFunction(() => console.log("Hello, I'm a callback function!"));
  