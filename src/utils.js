function countTotal(board, currentY, currentX, directionX, directionY) {
  // 现在要检查的棋子颜色
  const now = board[currentY][currentX];

  // 棋子的每个方向
  // 例如给的方向是「上方」（0, 1）
  // 那下面的回圈就會一直把 y 轴加一，并计算重复出现的棋子数目
  // 只要碰到不连续，或超出棋盘就会跳掉
  // 最终得到total的数目

  let tempX = currentX;
  let tempY = currentY;
  let total = 0;

  do {
    // 检测下一个棋子
    tempX += directionX;
    tempY += directionY;

    // board[tempY] 如果不存在，直接不用看了
    // 至于 board[tempY][tempX] 不用检查是因为就算不做检查，后面比对结果也一定不对，
    // 所以就不需要再多写一层 && [board][tempY][tempX] 来检查了
    if (board[tempY] && board[tempY][tempX] === now) {
      // 如果下一个棋子 = 现在要检查的，连续的棋子数 + 1
      total++;
    } else {
      break;
    }
  } while (true);
  return total;
}

export function findWinner(board, y, x) {
  // 计算重复出现的棋子数目
  // 1. 目标的左边跟右边（X 轴）
  // 2. 目标的上面跟下面（Y 轴）
  // 3. 目标的右上跟左下（正斜线）
  // 4. 目标的右下跟左上（反斜线）
  if (
    countTotal(board, y, x, 1, 0) + countTotal(board, y, x, -1, 0) >= 4 ||
    countTotal(board, y, x, 0, 1) + countTotal(board, y, x, 0, -1) >= 4 ||
    countTotal(board, y, x, 1, 1) + countTotal(board, y, x, -1, -1) >= 4 ||
    countTotal(board, y, x, 1, -1) + countTotal(board, y, x, -1, 1) >= 4
  ) {
    return board[y][x];
  }

  // 回传 true 表示每一个 row 里的 col 都有值，
  // 都有值就表示棋盘下满了，所以回传平局
  if (board.every((row) => row.every((col) => col))) {
    return "draw";
  }
}
