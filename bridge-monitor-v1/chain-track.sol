pragma solidity ^0.5.0;

contract ChainTrack {

  // ...

  event Checker(
    uint id,
    string content,
    bool completed
  );

  // ...

  function Checker(string memory _content) public {
    taskCount ++;
    tasks[taskCount] = Task(taskCount, _content, false);
    emit TaskCreated(taskCount, _content, false);
  }

}
