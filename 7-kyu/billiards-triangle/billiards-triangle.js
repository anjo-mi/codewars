 
const pyramid = (balls, line = 1) => balls < line 
          ? line - 1 
          : pyramid(balls - line, line + 1);