const blueRectangle = {
    width: 10,
    heigth: 5
};

function calculateRectangleArea(rectangle: typeof blueRectangle) {
    return rectangle.width * rectangle.heigth;
}

const area = calculateRectangleArea(blueRectangle);
console.log("The area of the rectangle is:", area);
