function volume_sphere(event) {
    event.preventDefault(); // Prevent form submission

    let radiusInput = document.getElementById('radius').value;
    let radius = parseFloat(radiusInput);

    if (isNaN(radius) || radius < 0) {
        document.getElementById('volume').value = 'NaN';
        return;
    }

    let volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
    document.getElementById('volume').value = volume.toFixed(4);
}

window.onload = function () {
    document.getElementById('MyForm').onsubmit = volume_sphere;
};
