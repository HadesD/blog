import {h} from 'hyperapp';
import {
  Link
} from '@hyperapp/router';

import utils from '../../commons/utils.js';

const Header = ({state, actions}) => {
  return (
    <header class="header">
      <nav class="navbar navbar-expand-lg">
        <div class="search-panel">
          <div class="search-inner d-flex align-items-center justify-content-center">
            <div class="close-btn">Close <i class="fa fa-close"></i></div>
            <form id="searchForm" action="#">
              <div class="form-group">
                <input type="search" name="search" placeholder="What are you searching for..." />
                <button type="submit" class="submit">Search</button>
              </div>
            </form>
          </div>
        </div>
        <div class="container-fluid d-flex align-items-center justify-content-between">
          <div class="navbar-header">
            <a href="index.html" class="navbar-brand">
              <div class="brand-text brand-big visible text-uppercase"><strong class="text-primary">Dark</strong><strong>Admin</strong></div>
              <div class="brand-text brand-sm"><strong class="text-primary">D</strong><strong>A</strong></div>
            </a>
            <button class="sidebar-toggle" onclick={(e) => (s) => {console.log(s)}}>
              <i class="fa fa-long-arrow-left"></i>
            </button>
          </div>
          <ul class="right-menu list-inline no-margin-bottom">
            <li class="list-inline-item"><a href="#" class="search-open nav-link"><i class="icon-magnifying-glass-browser"></i></a></li>
            <li class="list-inline-item dropdown"><a id="navbarDropdownMenuLink1" href="http://example.com" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="nav-link messages-toggle"><i class="icon-email"></i><span class="badge dashbg-1">5</span></a>
              <ul aria-labelledby="navbarDropdownMenuLink1" class="dropdown-menu messages">
                <li>
                  <a href="#" class="dropdown-item message d-flex align-items-center">
                    <div class="profile">
                      <img src={utils.asset("dashboard/img/avatar-3.jpg")} alt="..." class="img-fluid" />
                      <div class="status online"></div>
                    </div>
                    <div class="content">   <strong class="d-block">Nadia Halsey</strong><span class="d-block">lorem ipsum dolor sit amit</span><small class="date d-block">9:30am</small></div>
                  </a>
                </li>
                <li>
                  <a href="#" class="dropdown-item message d-flex align-items-center">
                    <div class="profile">
                      <img src={utils.asset("dashboard/img/avatar-2.jpg")} alt="..." class="img-fluid" />
                      <div class="status away"></div>
                    </div>
                    <div class="content">
                      <strong class="d-block">Peter Ramsy</strong>
                      <span class="d-block">lorem ipsum dolor sit amit</span>
                      <small class="date d-block">7:40am</small>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#" class="dropdown-item message d-flex align-items-center">
                    <div class="profile">
                      <img src={utils.asset("dashboard/img/avatar-1.jpg")} alt="..." class="img-fluid" />
                      <div class="status busy"></div>
                    </div>
                    <div class="content">   <strong class="d-block">Sam Kaheil</strong><span class="d-block">lorem ipsum dolor sit amit</span><small class="date d-block">6:55am</small></div>
                  </a>
                </li>
                <li>
                  <a href="#" class="dropdown-item message d-flex align-items-center">
                    <div class="profile">
                      <img src={utils.asset("dashboard/img/avatar-5.jpg")} alt="..." class="img-fluid" />
                      <div class="status offline"></div>
                    </div>
                    <div class="content">   <strong class="d-block">Sara Wood</strong><span class="d-block">lorem ipsum dolor sit amit</span><small class="date d-block">10:30pm</small></div>
                  </a>
                </li>
                <li><a href="#" class="dropdown-item text-center message"> <strong>See All Messages <i class="fa fa-angle-right"></i></strong></a></li>
              </ul>
            </li>
            <li class="list-inline-item dropdown">
              <a id="navbarDropdownMenuLink2" href="http://example.com" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="nav-link tasks-toggle"><i class="icon-new-file"></i><span class="badge dashbg-3">9</span></a>
              <ul aria-labelledby="navbarDropdownMenuLink2" class="dropdown-menu tasks-list">
                <li>
                  <a href="#" class="dropdown-item">
                    <div class="text d-flex justify-content-between"><strong>Task 1</strong><span>40% complete</span></div>
                    <div class="progress">
                      <div role="progressbar" style="width: 40%" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" class="progress-bar dashbg-1"></div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#" class="dropdown-item">
                    <div class="text d-flex justify-content-between"><strong>Task 2</strong><span>20% complete</span></div>
                    <div class="progress">
                      <div role="progressbar" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" class="progress-bar dashbg-2"></div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#" class="dropdown-item">
                    <div class="text d-flex justify-content-between"><strong>Task 3</strong><span>70% complete</span></div>
                    <div class="progress">
                      <div role="progressbar" style="width: 70%" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" class="progress-bar dashbg-4"></div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#" class="dropdown-item">
                    <div class="text d-flex justify-content-between"><strong>Task 4</strong><span>40% complete</span></div>
                    <div class="progress">
                      <div role="progressbar" style="width: 40%" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" class="progress-bar dashbg-1"></div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#" class="dropdown-item">
                    <div class="text d-flex justify-content-between"><strong>Task 5</strong><span>30% complete</span></div>
                    <div class="progress">
                      <div role="progressbar" style="width: 30%" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100" class="progress-bar dashbg-3"></div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#" class="dropdown-item text-center"> <strong>See All Tasks <i class="fa fa-angle-right"></i></strong></a>
                </li>
              </ul>
            </li>
            <li class="list-inline-item dropdown menu-large">
              <a href="#" data-toggle="dropdown" class="nav-link">Mega <i class="fa fa-ellipsis-v"></i>
              </a>
              <ul class="dropdown-menu megamenu">
                <div class="row">
                  <div class="col-lg-3"><strong class="text-uppercase">Elements Heading</strong>
                    <ul class="list-unstyled">
                      <li><a href="#">Lorem ipsum dolor</a></li>
                      <li><a href="#">Sed ut perspiciatis</a></li>
                      <li><a href="#">Voluptatum deleniti</a></li>
                      <li><a href="#">At vero eos</a></li>
                      <li><a href="#">Consectetur adipiscing</a></li>
                      <li><a href="#">Duis aute irure</a></li>
                      <li><a href="#">Necessitatibus saepe</a></li>
                      <li><a href="#">Maiores alias</a></li>
                    </ul>
                  </div>
                  <div class="col-lg-3">
                    <strong class="text-uppercase">Elements Heading</strong>
                    <ul class="list-unstyled">
                      <li><a href="#">Lorem ipsum dolor</a></li>
                      <li><a href="#">Sed ut perspiciatis</a></li>
                      <li><a href="#">Voluptatum deleniti</a></li>
                      <li><a href="#">At vero eos</a></li>
                      <li><a href="#">Consectetur adipiscing</a></li>
                      <li><a href="#">Duis aute irure</a></li>
                      <li><a href="#">Necessitatibus saepe</a></li>
                      <li><a href="#">Maiores alias</a></li>
                    </ul>
                  </div>
                  <div class="col-lg-3">
                    <strong class="text-uppercase">Elements Heading</strong>
                    <ul class="list-unstyled">
                      <li><a href="#">Lorem ipsum dolor</a></li>
                      <li><a href="#">Sed ut perspiciatis</a></li>
                      <li><a href="#">Voluptatum deleniti</a></li>
                      <li><a href="#">At vero eos</a></li>
                      <li><a href="#">Consectetur adipiscing</a></li>
                      <li><a href="#">Duis aute irure</a></li>
                      <li><a href="#">Necessitatibus saepe</a></li>
                      <li><a href="#">Maiores alias</a></li>
                    </ul>
                  </div>
                  <div class="col-lg-3">
                    <strong class="text-uppercase">Elements Heading</strong>
                    <ul class="list-unstyled">
                      <li><a href="#">Lorem ipsum dolor</a></li>
                      <li><a href="#">Sed ut perspiciatis</a></li>
                      <li><a href="#">Voluptatum deleniti</a></li>
                      <li><a href="#">At vero eos</a></li>
                      <li><a href="#">Consectetur adipiscing</a></li>
                      <li><a href="#">Duis aute irure</a></li>
                      <li><a href="#">Necessitatibus saepe</a></li>
                      <li><a href="#">Maiores alias</a></li>
                    </ul>
                  </div>
                </div>
                <div class="row megamenu-buttons text-center">
                  <div class="col-lg-2 col-md-4"><a href="#" class="d-block megamenu-button-link dashbg-1"><i class="fa fa-clock-o"></i><strong>Demo 1</strong></a></div>
                  <div class="col-lg-2 col-md-4"><a href="#" class="d-block megamenu-button-link dashbg-2"><i class="fa fa-clock-o"></i><strong>Demo 2</strong></a></div>
                  <div class="col-lg-2 col-md-4"><a href="#" class="d-block megamenu-button-link dashbg-3"><i class="fa fa-clock-o"></i><strong>Demo 3</strong></a></div>
                  <div class="col-lg-2 col-md-4"><a href="#" class="d-block megamenu-button-link dashbg-4"><i class="fa fa-clock-o"></i><strong>Demo 4</strong></a></div>
                  <div class="col-lg-2 col-md-4"><a href="#" class="d-block megamenu-button-link bg-danger"><i class="fa fa-clock-o"></i><strong>Demo 5</strong></a></div>
                  <div class="col-lg-2 col-md-4"><a href="#" class="d-block megamenu-button-link bg-info"><i class="fa fa-clock-o"></i><strong>Demo 6</strong></a></div>
                </div>
              </ul>
            </li>
            <li class="list-inline-item logout">
              <a id="logout" href="login.html" class="nav-link">Logout <i class="icon-logout"></i></a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

const Sidebar = ({state, actions}) => {
  return (
    <nav id="sidebar" class={state.isSidebarOpenned ? 'shrinked' : ''}>
      <div class="sidebar-header d-flex align-items-center">
        <div class="avatar">
          <img src={utils.asset("dashboard/img/avatar-6.jpg")} alt="..." class="img-fluid rounded-circle" />
        </div>
        <div class="title">
          <h1 class="h5">Mark Stephen</h1>
          <p>Web Designer</p>
        </div>
      </div>
      <span class="heading">Main</span>
      <ul class="list-unstyled">
        <li class="active">
          <a href="index.html">
            <i class="icon-home"></i>
            Home
          </a>
        </li>
        <li><a href="tables.html"> <i class="icon-grid"></i>Tables </a></li>
        <li><a href="charts.html"> <i class="fa fa-bar-chart"></i>Charts </a></li>
        <li><a href="forms.html"> <i class="icon-padnote"></i>Forms </a></li>
        <li><a href="#exampledropdownDropdown" aria-expanded="false" data-toggle="collapse"> <i class="icon-windows"></i>Example dropdown </a>
          <ul id="exampledropdownDropdown" class="collapse list-unstyled ">
            <li><a href="#">Page</a></li>
            <li><a href="#">Page</a></li>
            <li><a href="#">Page</a></li>
          </ul>
        </li>
        <li><a href="login.html"> <i class="icon-logout"></i>Login page </a></li>
      </ul><span class="heading">Extras</span>
      <ul class="list-unstyled">
        <li> <a href="#"> <i class="icon-settings"></i>Demo </a></li>
        <li> <a href="#"> <i class="icon-writing-whiteboard"></i>Demo </a></li>
        <li> <a href="#"> <i class="icon-chart"></i>Demo </a></li>
      </ul>
    </nav>
  );
};

const Breadcrumb = ({state, actions}) => {
  return (
    <div class="container-fluid">
      <ul class="breadcrumb">
        <li class="breadcrumb-item"><a href="index.html">Home</a></li>
        <li class="breadcrumb-item active">Charts</li>
      </ul>
    </div>
  );
};

const Footer = ({state, actions}) => {
  return (
    <footer class="footer">
      <div class="footer__block block no-margin-bottom">
        <div class="container-fluid text-center">
          <p class="no-margin-bottom">
            2017 &copy; Your company. Design by
            <a href="https://bootstrapious.com">Bootstrapious</a>.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default ({state, actions}, children) => {
  return (
    <div>
      <Header state={state} actions={actions} />
      <div class="d-flex align-items-stretch">
        <Sidebar state={state} actions={actions} />
        <div class="page-content">
          <div class="page-header no-margin-bottom">
            <div class="container-fluid">
              <h2 class="h5 no-margin-bottom">Dashboard</h2>
            </div>
          </div>
          <Breadcrumb state={state} actions={actions} />
          {children}
          <Footer state={state} actions={actions} />
        </div>
      </div>
    </div>
  );
};
