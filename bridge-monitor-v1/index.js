<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title>Dapp University | Todo List</title>

    <!-- Bootstrap -->
    <link href="vendor/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">


      <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->

    <style>
      main {
        margin-top: 60px;
      }

      #content {
        display: none;
      }

      form {
        width: 350px;
        margin-bottom: 10px;
      }

      ul {
        margin-bottom: 0px;
      }

      #completedTaskList .content {
        color: grey;
        text-decoration: line-through;
      }
    </style>
  </head>
  <body>
    <nav class="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
      <a class="navbar-brand col-sm-3 col-md-2 mr-0" href="http://www.dappuniversity.com/free-download" target="_blank">Dapp University | Todo List</a>
      <ul class="navbar-nav px-3">
        <li class="nav-item text-nowrap d-none d-sm-none d-sm-block">
          <small><a class="nav-link" href="#"><span id="account"></span></a></small>
        </li>
      </ul>
    </nav>
    <div class="container-fluid">
      <div class="row">
        <main role="main" class="col-lg-12 d-flex justify-content-center">
          <div id="loader" class="text-center">
            <p class="text-center">Loading...</p>
          </div>
          <div id="content">
         <!-- <form onSubmit="App.createTask(); return false;">
              <input id="newTask" type="text" class="form-control" placeholder="Add task..." required>
              <input type="submit" hidden="">
            </form> -->
            <ul id="taskList" class="list-unstyled">
              <div class="taskTemplate" class="checkbox" style="display: none">
                <label>
                  <input type="checkbox" />
                  <span class="content">Task content goes here...</span>
                </label>
              </div>
            </ul>
            <ul id="completedTaskList" class="list-unstyled">
            </ul>
          </div>
        </main>
      </div>
    </div>

    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="vendor/bootstrap/dist/js/bootstrap.min.js"></script>
    <script src="vendor/truffle-contract/dist/truffle-contract.js"></script>
    <script src="app.js"></script>
  </body>
</html>
