const PRIMARY = "primary";
const SECONDARY = "secondary";
const TERTINARY = "tertinary";

class CalculatorButton {
	constructor(shape, type, value) {
		this.shape = shape;
		this.type = type;
		this.value = value;
	}
}

const buttonStyles = new Map();

buttonStyles.set(PRIMARY, { bg: "#333333", color: "white" });
buttonStyles.set(SECONDARY, { bg: "#FE9505", color: "white" });
buttonStyles.set(TERTINARY, { bg: "#A4A4A4", color: "black" });

const calculatorContainer = document.getElementById("calculator");

const getColorPattern = (type) => {
	return buttonStyles.get(type);
};

const createButtonEl = (buttonDesc) => {
	const buttonEl = document.createElement("span");
	const style = getColorPattern(buttonDesc.type);

	buttonEl.innerText = buttonDesc.value;
	buttonEl.style.backgroundColor = style.bg;
	buttonEl.style.color = style.color;

	buttonEl.classList.add("calc-btn");

	return buttonEl;
};

const render = () => {
	const primaryBtn = new CalculatorButton("circle", PRIMARY, "1");
	const secondaryBtn = new CalculatorButton("circle", SECONDARY, "x");
	const tertinaryBtn = new CalculatorButton("circle", TERTINARY, "%");

	const primaryBtnEl = createButtonEl(primaryBtn);
	const secondaryBtnEl = createButtonEl(secondaryBtn);
	const tertinaryBtnEl = createButtonEl(tertinaryBtn);

	calculatorContainer.appendChild(primaryBtnEl);
	calculatorContainer.appendChild(secondaryBtnEl);
	calculatorContainer.appendChild(tertinaryBtnEl);
};

render();
