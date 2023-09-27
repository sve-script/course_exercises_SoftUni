function code(radius, height) {
    let volume = 1/3 * height * Math.PI * (radius ** 2);
    let pitagor = Math.sqrt((height ** 2 ) + (radius ** 2));
    let area = Math.PI * (radius ** 2)+ Math.PI * radius * pitagor;

    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${area.toFixed(4)}`);


}

code(3, 5);

// volume = V=1/3hπr²