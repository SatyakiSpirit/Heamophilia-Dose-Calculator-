function calculateDose() {
    const type = document.getElementById("type").value;
    const weight = parseFloat(document.getElementById("weight").value);
    const bleeding = document.getElementById("bleeding").value;
    let dose;

    if (isNaN(weight) || weight <= 0) {
        alert("Please enter a valid weight.");
        return;
    }

    if (type === "A") {
        switch (bleeding) {
            case "medium":
                dose = weight * 30;  // Medium bleeding dose
                break;
            case "minor":
                dose = weight * 20;  // Minor bleeding dose
                break;
            case "major":
                dose = weight * 50;  // Major bleeding dose for Hemophilia A
                break;
        }
    } else if (type === "B") {
        switch (bleeding) {
            case "medium":
                dose = weight * 25;  // Medium bleeding dose
                break;
            case "minor":
                dose = weight * 15;  // Minor bleeding dose
                break;
            case "major":
                dose = weight * 40;  // Major bleeding dose for Hemophilia B
                break;
        }
    }

    // Special case for Brain Hemorrhage (major bleeding with 100% dose)
    if (bleeding === "major" && dose !== undefined) {
        dose = weight * 100;
    }

    // Display the result
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `Recommended Factor Dose: ${dose} IU`;
}
