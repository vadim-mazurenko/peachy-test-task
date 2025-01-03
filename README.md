
## Note
1.  Created the possibility to add Products/variants to the cart by clicking the "Add to cart" button
 2. Changing a product variant (created a custom dropdown, see point 3) changes the variant that will be added to the cart
 3. Created a custom dropdown for selecting variants. It is easier to customize and optimize than the default select. when changing an variant, the product price is recalculated. if some product  variant has a product availability = 0, then the ‘add to cart’ button becomes disabled and the   
    text changes to ‘sold out’. (used custom elements) (Ideally,  needed to add functionality for tracking products in the cart. If they added more times than the product is available, then also need to make a ‘sold out’ button. For this, need to track the 'cart.requestComplete' event and 
    compare the all variant ID option and reduce the quantity)
 4.Added icon snippet (used currentColor) also added Futura PT font-family
 5. Implemented carousel for Product Cards on mobile devices, and grids on desktops
 6. Clicking on the product image and product name will redirect to the product details page.
 7. Added section settings such as: choosing a picture for the background, title, top and bottom indents
 8. On mobile design part of the title has a different color and shadow. you can change it in the admin panel. just in the title field you need to specify the text that you want to see inside the [inverted]sellers[inverted] tags. in our case it is (sellers). in Liquid I created a filter that 
    replaces everything inside this tag with text with a different color and shadow. (it was possible to implement an html field. need to срщщіу what is easier for the client to edit)

## Sources

- https://test-vadim-1.myshopify.com?preview_theme_id=167300399412
