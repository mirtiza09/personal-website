---
template: blog-post
title: SQL For Product Managers
slug: sql
date: 2022-07-26 19:53
description: SQL for Product Managers
featuredImage: /assets/0_rwqi3xkmdzgsvuxr.jpg
---
<!--StartFragment-->

Data is for a Product Manager what a good sword is to an assassin — a means to executing the job better. For a job that revolves around decision making and making bets, having solid data to back our conjectures will often yield better outcomes and help counter our biases or omissions.

For Product Manager, I believe the following tenets of data are important:

1. Data-oriented mindset
2. Proficiency in data querying (SQL)
3. Proficiency in data visualization (PowerBI, Tableau)
4. Proficiency in Hypothesis testing and A/B Testing
5. Basic Exploratory Data Analysis (EDA)
6. Grasp over Product Analytics and Event Mapping

In this article, I focus on the second tenet, Proficiency in SQL

In terms of the benefits of being able to query data through SQL, they are multiple fold. If you want to make decisions on the go, you can always query the relevant data in a matter of minutes instead of hours or days for the engineering/data team to view and respond to your request. Additionally, knowing the data for your product helps you understand you product better. And finally, your engineers/analysts will thank you taking some workload off their hands and helping them concentrate on other tasks.

# About SQL

Structured Query Language (SQL), or ‘Sequel’, is a way to manage data and communicate Relational Database Management Systems (RDMS). Most of our data is stored in Databases, Data Warehouses, and Data Lakes. As your product scales, it becomes increasingly difficult and complicated to manage it, and *RDMS is one of the ways to manage the data*. The devs might also opt for a NoSQL database which scales better in some cases, so it is best to communicate with them about the tech stack being used.

*SQL is a programming language that can help you perform CRUD operations in a relational database: Create, Retrieve, Update, and Delete.* As a Product Manager, the most important operation for you would be the ‘Retrieve’ operation to analyze existing data. Make sure you explicitly state that you just need ‘query level access’ to the database to retrieve data from the database when contacting the database administrator for the first time for access.

*There are multiple ‘flavors’ of SQL, i.e. MySQL, PostGRESQL, SQLite, and MSSQL, but with minor deviations, they follow more or less the same underlying principles of SQL, so do not be intimidated by the range of choices.*

# How much of SQL do I need to know as a Product Manager?

As a Product Manager, you will inevitably find yourself working in vastly different roles depending on the type, size, and stage of the company you are working in. In a pre-product market fit company, chances are you are not collecting enough data, so SQL becomes irrelevant. However, in a company with mature products collecting data, it becomes imperative to know your way around the data.

Nobody should expect you to create and maintain databases — that is the job of a Data Engineer, and a well paid one at that. You should, however, be able to execute simple queries as per your requirements, perform mathematical operations, perform aggregate functions, be able to group and sort data as per your requirements. Additionally, you should be comfortable with joining tables on SQL. I recommend following the SQL Fundamentals track on Datacamp — I have found their interactive teaching style to be challenging yet effective.

Taking this a step further, competent Product Managers have a grip on what technologies are effective to solve specific problems and address specific application needs. I would recommend brushing up your concepts of Relational Databases and NoSQL databases alike, the merits and demerits of both, and how distributed computing and cloud technologies have impacted software development. I recommend reading ‘Data Just Right’ by [Michael Manoochehri](https://medium.com/u/160463203ada?source=post_page-----dedbbb599216--------------------------------) — he has a gift of explaining things in a simple yet effective manner.

While delving into the specifics of every technology in databases requires extensive review of existing literature, I can help get you started with relational databases — the type of databases that allow us to communicate to them via SQL.

# ER Diagram

*A relational database is a set of multiple data sets organized by tables, records and columns, much like a series of excel sheets.* *These tables can communicate with each other based on specific fields in the database which are known as keys. An Entity Relationship Diagram (ERD) is used to visualize these relationships in a database. ERD is also helpful in database design and engineering.* Key components of the ER Diagram are as follows:

1. Entity: A place, thing, or person to be tracked in a database.
2. Attribute: Various properties and traits of Entities.
3. Relationship: In an ER *Diagram*, lines are used to connect entities together and show a relationship. ERD Cardinality further defines these relationships.
4. Fact Table: A central Entity in a RDMS that holds Foreign Keys and numerical data.
5. Primary Key: A unique, never changing, never-null, and identifiable attribute.
6. Foreign Key: Same as the Primary Key, but located in a foreign place.

Here’s how an ERD looks like:

![](https://miro.medium.com/max/700/1*YmfVwQmW0Lc__gZMVxR58A.png)

Bonus Tip: You can create an ERD on [www.erdplus.com](http://www.erdplus.com/) for free. Replicating the above diagram on ERDplus yields us the following output:

![](https://miro.medium.com/max/700/1*kU-IyNRJrldRt9kySVVktQ.png)

# Conclusion

Learning SQL can help you become a better product manager in an organization that has the data available and in the right format to be queried. If this applies to you, then you should definitely learn this language, as it is pretty easy to learn and yields significant benefits.

<!--EndFragment-->