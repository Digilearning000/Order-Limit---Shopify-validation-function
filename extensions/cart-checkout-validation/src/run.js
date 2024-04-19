// @ts-check

/**
 * @typedef {import("../generated/api").RunInput} RunInput
 * @typedef {import("../generated/api").FunctionRunResult} FunctionRunResult
 */

/**
 * @param {RunInput} input
 * @returns {FunctionRunResult}
 */
export function run(input) {
  const errors = [];

  input.cart.lines.forEach((lineItem) => {
    const { quantity, merchandise } = lineItem;

    const max = Number.parseInt(merchandise?.product?.max_items.value);
    if (max && quantity > max) {
      errors.push({
        message: `Quantity of ${quantity} exceeds max of ${max}`,
        target: "cart",
      });
    }
  });

  return {
    errors,
  };
}
