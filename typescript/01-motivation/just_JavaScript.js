const blueRectangle = {
    width: 10,
    heigth: 5
};

function calculateRectangleArea(rectangle) {
    return rectangle.width * rectangle.height;
}

const area = calculateRectangleArea(blueRectangle);
console.log("The area of the rectangle is:", area);