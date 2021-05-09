const graphql=require('graphql');
const {GraphQLObjectType,GraphQLString} =graphql;
const _=require('lodash');

//dummy data
var books=[
    { name: 'Name of the Wind', genre:'Fantasy', id:'1'},
    { name: 'dfqwdfwqw qfqwefq', genre:'Fantasy', id:'2'},
    { name: 'efqew fqwefqeefqe', genre:'Sci', id:'3'},
];

const BookType=new GraphQLObjectType({
    name: 'Book',
    fields: ()=>({
        id:{type:GraphQLString},
        name:{type:GraphQLString},
        genre:{type:GraphQLString},
    })
});

const RootQuery=new GraphQLObjectType({
    name: 'RootQueryType',
    fields:{
        book:{
            type:BookType,
            args:{id:{type:GraphQLString}},
            resolve(pparent,args){
                //code to get data from db or other source 
                return_find(books,{id:args.id});
            }
        }
    }
});

module.exports=new GraphQLSchema({
    query:RootQuery
});