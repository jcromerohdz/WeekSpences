export const budgetCheck = (budget, bgtLeft) => {
  let cssClass;

  if( ( budget / 4 ) > bgtLeft ) {
    cssClass = 'alert alert-danger';
  } else if ( (budget / 2) > bgtLeft ){
    cssClass = 'alert alert-warning';
  } else {
    cssClass = 'alert alert-success';
  }

  return cssClass;
}
