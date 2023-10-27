import view from './view.js';
import icons from 'url:../../img/icons.svg';
import previewView from './previewView.js';

class bookmarksView extends view {
  _parentElement = document.querySelector('.bookmarks__list');
  _errorMessage = '  No bookmarks yet. Find a nice recipe and bookmark it :)';
  _message = '';

  addHandlerRender(render) {
    window.addEventListener('load', render);
  }
  _generateMarkup() {
    return this._data
      .map(bookmark => previewView.render(bookmark, false))
      .join('');
  }
}
export default new bookmarksView();
