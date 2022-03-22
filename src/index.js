/**
 * 자판기 상품
 * @constructor
 * @param {number} price - 상품의 가격
 * @param {number} quantity - 상품의 수량
 * @param {string} name - 상품의 이름
 */
function Item(price, quantity, name) {}

/**
 * 자판기
 * @constructor
 * @param {Item[]} items - 상품들
 */
function VendingMachine(items = []) {}

/**
 * 상품을 구매하는 함수
 * @abstract
 * @param {number} price - 상품의 가격
 * @return {string}
 */
VendingMachine.prototype.getItem = function (price) {};
