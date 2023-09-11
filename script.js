function calculateGrade(percentage) {
  //your code here
	 if (typeof percentage !== 'number' || isNaN(percentage)) {
        return 'F';
    }

    // Round the percentage to the nearest integer
    const roundedPercentage = Math.round(percentage);

    // Determine the letter grade based on the percentage score
    if (roundedPercentage >= 90) {
        return 'A';
    } else if (roundedPercentage >= 80) {
        return 'B';
    } else if (roundedPercentage >= 70) {
        return 'C';
    } else if (roundedPercentage >= 60) {
        return 'D';
    } else {
        return 'F';
    }
}
const percentage = parseInt(prompt("Enter Percentage."));
alert(calculateGrade(percentage));
