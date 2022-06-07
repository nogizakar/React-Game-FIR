import styled from "styled-components";
import Chess from "./Chess";
import PropTypes from "prop-types";

const Wrapper = styled.div`
  display: flex;
`;

const Container = styled.div`
  border: 10px solid rgb(191 120 15 / 90%);
  margin: auto;
`;

const Row = styled.div`
  display: flex;

  &:last-child > button::after {
    display: none;
  }

  &:nth-last-child(2) > button::after {
    border-bottom: 1px solid rgb(0 0 0 / 50%);
  }
`;

export default function Board({ board, handleChessClick }) {
  return (
    <Wrapper>
      <Container>
        {/* 外面的 19 个 row */}
        {board.map((row, rowIndex) => {
          return (
            <Row key={rowIndex}>
              {/* 里面的 19 个 column */}
              {row.map((col, colIndex) => (
                <Chess
                  key={colIndex}
                  row={rowIndex}
                  col={colIndex}
                  value={board[rowIndex][colIndex]}
                  onClick={handleChessClick}
                />
              ))}
            </Row>
          );
        })}
      </Container>
    </Wrapper>
  );
}

Board.propTypes = {
  board: PropTypes.array,
  handleChessClick: PropTypes.func,
};
