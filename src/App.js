import React, { Component } from 'react';
import authors from './data';


class App extends Component {
  render() {
    return (
      <div>

  
  <div id="app" className="container-fluid">
    <div className="row">
      <div className="col-2">
        <sidebar>
          <img src="theindex.svg" className="logo" />
          <section>
            <h4 className="menu-item active">
              <a href="#">AUTHORS</a>
            </h4>
          </section>
        </sidebar>
      </div>
      <div className="content col-10">
        <div className="authors">
          <h3>Authors</h3>
          <div className="row">
            <div className="col-4">
              <a href="#" className="card">
                <div className="image">
                  <img className="card-img-top img-fluid" src={authors[0].imageUrl} />
                </div>
                <div className="card-body">
                  <h5 className="card-title">
                    <span>{authors[0].first_name} {authors[0].last_name}</span>
                  </h5>
                  <small className="card-text">{authors[0].books.length} books</small>
                </div>
              </a>
            </div>
            <div className="col-4">
              <a href="#" className="card">
                <div className="image">
                  <img className="card-img-top img-fluid" src="https://typeset-beta.imgix.net/elite-daily/2016/03/06144207/elite-daily-George-RR-Martin.jpg?w=800&h=800&auto=format&q=70&fit=crop&crop=faces" />
                </div>
                <div className="card-body">
                  <h5 className="card-title">
                    <span>George R.R. Martin</span>
                  </h5>
                  <small className="card-text">5 books</small>
                </div>
              </a>
            </div>
            <div className="col-4">
              <a href="#" className="card">
                <div className="image">
                  <img className="card-img-top img-fluid" src="https://images.8tracks.com/cover/i/010/010/920/tolkeinbigger-2362.jpg?rect=166,0,500,500&q=98&fm=jpg&fit=max" />
                </div>
                <div className="card-body">
                  <h5 className="card-title">
                    <span>J.R.R Tolkein</span>
                  </h5>
                  <small className="card-text">6 books</small>
                </div>
              </a>
            </div>
            <div className="col-4">
              <a href="#" className="card">
                <div className="image">
                  <img className="card-img-top img-fluid" src="http://speakingtigerbooks.com/wp-content/uploads/2016/06/naguib-mahfouz-5.jpg" />
                </div>
                <div className="card-body">
                  <h5 className="card-title">
                    <span>Naguib Mahfouz</span>
                  </h5>
                  <small className="card-text">8 books</small>
                </div>
              </a>
            </div>
            <div className="col-4">
              <a href="#" className="card">
                <div className="image">
                  <img className="card-img-top img-fluid" src="http://images.archant.co.uk/polopoly_fs/1.4811429.1481285995!/image/image.jpg_gen/derivatives/landscape_630/image.jpg" />
                </div>
                <div className="card-body">
                  <h5 className="card-title">
                    <span>Agatha Christie</span>
                  </h5>
                  <small className="card-text">30 books</small>
                </div>
              </a>
            </div>
            <div className="col-4">
              <a href="#" className="card">
                <div className="image">
                  <img className="card-img-top img-fluid" src="https://pbs.twimg.com/profile_images/941508335966343169/xsxkTLe0.jpg" />
                </div>
                <div className="card-body">
                  <h5 className="card-title">
                    <span>Jordan Peterson</span>
                  </h5>
                  <small className="card-text">2 books</small>
                </div>
              </a>
            </div>
            <div className="col-4">
              <a href="#" className="card">
                <div className="image">
                  <img className="card-img-top img-fluid" src="https://literature.britishcouncil.org/assets/Uploads/writers/_resampled/CroppedImage680680-Margaret-Atwood-c-Jean-Malek-web.jpg" />
                </div>
                <div className="card-body">
                  <h5 className="card-title">
                    <span>Margaret Atwood</span>
                  </h5>
                  <small className="card-text">5 books</small>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
      </div>
    );
  }
}

export default App;
