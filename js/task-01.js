  const categoriesList = document.querySelector('#categories');
  const categoriesItems = categoriesList.querySelectorAll('.item');
  
  console.log(`Number of categories: ${categoriesItems.length}`);
  
  categoriesItems.forEach((item) => {
    const heading = item.querySelector('h2').textContent;
    const count = item.querySelectorAll('li').length;
    console.log(`Category: ${heading} \nElements count: ${count}`);
  });