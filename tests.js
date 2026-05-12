/*
  BICSI Technical Workstation
  Basic development tests
*/

function runTests() {
  console.log("Running tests...");

  console.assert(rankFromTotal(28) === "EXAM DOMINANT", "28 should be EXAM DOMINANT");
  console.assert(rankFromTotal(26) === "TECHNICIAN READY", "26 should be TECHNICIAN READY");
  console.assert(rankFromTotal(23) === "JUNIOR TECH", "23 should be JUNIOR TECH");
  console.assert(rankFromTotal(18) === "SENIOR INSTALLER", "18 should be SENIOR INSTALLER");
  console.assert(rankFromTotal(10) === "INSTALLER", "10 should be INSTALLER");

  console.log("Rank tests complete.");
}
