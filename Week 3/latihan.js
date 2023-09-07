function kelulusan(ipk) {
  let grade;
  if (ipk > 3.6) {
    grade = "Cumlaude";
  } else if (ipk > 3) {
    grade = "Sangat Baik";
  } else {
    grade = "Cukup";
  }
  console.log(grade);
}

kelulusan(3.7);
kelulusan(3.6);
kelulusan(3);
