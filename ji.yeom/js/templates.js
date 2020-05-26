
const makeProductList = templater(o=>{
return `
<div class="col-xs-6 col-md-3">		
	<a href="product_item.php?id=${o.id}"  class="display-block">		
		<figure class="product-figure">
			<div class="product-image">
				<img src="img/${o.thumbnail}" alt="">
			</div>
			<figcaption class="product-figure description">
				<div class="product-name">${o.name}</div>
				<div class="product-price">&dollar;${o.price}</div>
			</figcaption>
		</figure>
	</a>
</div>
`;
})


