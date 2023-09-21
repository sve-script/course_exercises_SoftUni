function catLife(input) {

    let breed = input[0];
    let sex = input[1];

    let lifeTime = 0;

    switch (breed) {
        case "British Shorthair":
            switch (sex) {
                case "m": lifeTime = 13 * 12 / 6
                    break;
                case "f": lifeTime = 14 * 12 / 6
                    break;
            }
            break;
        case "Siamese":
            switch (sex) {
                case "m": lifeTime = 15 * 12 / 6
                    break;
                case "f": lifeTime = 16 * 12 / 6
                    break;
            }
            break;
        case "Persian":
            switch (sex) {
                case "m": lifeTime = 14 * 12 / 6
                    break;
                case "f": lifeTime = 15 * 12 / 6
                    break;
            }
            break;
        case "Ragdoll":
            switch (sex) {
                case "m": lifeTime = 16 * 12 / 6
                    break;
                case "f": lifeTime = 17 * 12 / 6
                    break;
            }
            break;
        case "American Shorthair":
            switch (sex) {
                case "m": lifeTime = 12 * 12 / 6
                    break;
                case "f": lifeTime = 13 * 12 / 6
                    break;
            }
            break;
        case "Siberian":
            switch (sex) {
                case "m": lifeTime = 11 * 12 / 6
                    break;
                case "f": lifeTime = 12 * 12 / 6
                    break;
            }
            break;

        default:
            console.log(`${breed} is invalid cat!`);

    }

    if (lifeTime > 0) {
        console.log(`${lifeTime} cat months`);
    }

}

catLife(["Tom",
"m"])


