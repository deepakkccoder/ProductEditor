import {Product} from './product'

enum Category {
    Electronics,
    Clothes,
    Accesories,
    Drinks
}
enum Condition{
    New,
    Furnished,
    Used
}
export const PRODUCTS: Product[]=[
    {id:2, name:'iphone5', description:'silver color', price:499, condition:'Condition.New', category:'Category.Electronics'},
    {id:3, name:'iphone7', description:'golden color', price:799, condition:'Condition.New', category:'Category.Electronics'},
    {id:4, name:'laptop', description:'Dell ', price:499, condition:'Condition.New', category:'Category.Electronics'},
    {id:5, name:'T-shirt', description:'white color', price:22, condition:'Condition.New', category:'Category.Electronics'},
    {id:6, name:'Pants', description:'Black color', price:80, condition:'Condition.New', category:'Category.Clothes'},
    {id:7, name:'Ear-phone', description:'wireless earphone ',price:20, condition:'Condition.New', category:'Category.Accesories'},
    {id:8, name:'Tie', description:'Professional tie', price:10, condition:'Condition.New', category:'Category.Clothes'},
    {id:9, name:'Shoes', description:'Sports Shoes', price:80, condition:'Condition.New', category:'Category.Clothes'},
    {id:10, name:'RedBull', description:'High energy drinks', price:12, condition:'Condition.New', category:'Category.Drinks'}
  ];