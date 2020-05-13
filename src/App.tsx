import React, { Fragment } from "react";
import styled from "styled-components";
import {
  faPen,
  faEraser,
  faBell,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";
import { InitialState, booleanDispatch, typingEvent } from "./TodoPropStorage";

////////when this todo is planed///
let today = new Date();
//////////////////////////////////

///Note!
//If I want to make containers which

//1. all contents are inline
//2. but want them to be stocked in block way

//If so, I should make "div" container <------- which secure enough space
//then, make container which has inline nature
function App<_InitialStateType>({ state, booleanFunction, textRefresh }: any) {
  const { boolAlternate, inputText } = state;
  const grantEdit = () => booleanFunction();
  const finishEdit = () => booleanFunction();
  const deTectOnchange = (e: any) => textRefresh(e.target.value);

  return (
    <Fragment>
      <Head>What you have to do right now</Head>
      <HowManyUndone>
        <UndoneBell>
          <FontAwesomeIcon icon={faBell} />
          <UndoneCounter>2</UndoneCounter>
        </UndoneBell>
      </HowManyUndone>
      <ListContainer>
        <ToDoUpdates>
          <WhenToDo>{today.toLocaleDateString("ko-KR")}</WhenToDo>
          <Todobars>
            <TodoText>asdfasdfasdfadsfasdfadf</TodoText>

            <TodoEditTools>
              {boolAlternate ? (
                <ButtonConfirm onClick={finishEdit}>
                  <FontAwesomeIcon icon={faCheck} />
                </ButtonConfirm>
              ) : (
                <Fragment>
                  <ButtonEdit onClick={grantEdit}>
                    <FontAwesomeIcon icon={faPen} />
                  </ButtonEdit>
                  <ButtonDelete>
                    <FontAwesomeIcon icon={faEraser} />
                  </ButtonDelete>
                </Fragment>
              )}
            </TodoEditTools>
          </Todobars>
        </ToDoUpdates>
      </ListContainer>

      <TotalCounter>
        <TypingBar value={inputText} onChange={deTectOnchange} />
        <Dissemination>enroll</Dissemination>
      </TotalCounter>
    </Fragment>
  );
}

//to pile contents in the column, display:flex + flex-direction:column
const Head = styled.header`
  color: white;
  font-size: 35px;
  font-weight: 700;
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HowManyUndone = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 30px;
`;
const UndoneBell = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: white;
  margin-right: 20px;
  color: #ffa502;
  background-color: #7bed9f;
  position: relative;
`;

const UndoneCounter = styled(UndoneBell)`
  background-color: white;
  width: 20px;
  height: 20px;
  color: black;
  font-size: 15px;
  font-weight: 500;
  position: absolute;
  top: -10px;
  right: -25px;
`;
///////////////////////////////////
const ListContainer = styled.section`
  padding-top: 10px;
  background-color: white;
  width: 95%;
  height: 380px;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  top: 330px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  overflow: auto;
`;

const ToDoUpdates = styled.div``;

const WhenToDo = styled.span`
  margin-left: 5px;
  margin-right: 1px;
  height: 30px;
  font-size: 12px;
  font-weight: 600;
  color: #40739e;
`;

const Todobars = styled.div`
  font-size: 20px;
  background-color: white;
  box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1);
  padding: 10px;
  border-radius: 15px;
  margin-bottom: 10px;
  margin-left: 3px;
  box-sizing: border-box;
  border: 1px solid;
  display: inline-block;
`;

//span = It means I intend to set the container as inline box
//blcok = I want to occupy the whole length (can change width, height + allowing line change)
//inline = I want to occupy only my space (cannot change width, height + disapproving line change)
//inline-block = inline + blcok(no line change but can change width, height)
const TodoText = styled.span`
  margin-left: 10px;
  margin-right: 15px;
`;

///////////////////////////////////////
const TodoEditTools = styled.div`
  width: 60px;
  display: inline-block;
`;

const ButtonEdit = styled.button`
  background-color: white;
  border: none;
  cursor: pointer;

  transition: all 0.2s ease-in;
  &:active,
  &:focus {
    outline: none;
  }
  &:hover {
    transform: translateY(-1px);
  }
  &:active {
    transform: translateY(1px);
  }
`;

const ButtonDelete = styled(ButtonEdit)`
  margin-left: 3px;
`;

const ButtonConfirm = styled(ButtonEdit)`
  margin-left: 20px;
`;

///////////////////////////////////////////////

/////score//////
const TotalCounter = styled.form`
  position: absolute;
  top: 521px;
  width: 100%;
  height: 88px;
  background-color: none;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const TypingBar = styled.input`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 50px;
  background-color: white;
  font-size: 50px;
  font-weight: 700;
  border: none;
  font-size: 20px;
  font-weight: 300;
  font-family: "Comic Sans MS", cursive, sans-serif;
`;

const Dissemination = styled.button`
  margin-right: 30px;
  margin-left: 10px;
  width: 60px;
  height: 60px;
  background-color: #dff9fb;
  border-radius: 35%;
  border: outset;
  border-width: 5px;
  font-weight: 700;

  transition: all 0.2s ease-out;
  &:hover {
    transform: translateY(-1px);
  }
  &:active,
  &:focus {
    outline: none;
  }
  &:active {
    transform: translateY(1px);
  }
`;

//////////////////////////////////////////////////////////////////////
//dispatch({}) send {} to action in redux storage.
function mapStateToProps(state: InitialState) {
  return { state };
}

function mapDispatchToProps(dispatch: any) {
  return {
    booleanFunction: () => dispatch(booleanDispatch()),
    textRefresh: (typing: string) => dispatch(typingEvent(typing)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
