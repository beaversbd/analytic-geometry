var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "sec-section-name",
  "level": "1",
  "url": "sec-section-name.html",
  "type": "Section",
  "number": "1.1",
  "title": "Section Title",
  "body": " Section Title  Analytic geometry is fundamentally about thinking of geometric shapes as collections of points, each of which has numerical coordinates in the space in which we are working, and then using the techniques of algebra to solve geometric problems.  The simplest space to be working in is when the world is just a single point. The next simplest is when all that exists is on a single line. The next simplest is when all that exists is in a single plane. The \"size\" of a space is measured by a counting number called the dimension which indicates how many fundamental \"directions\" are available in your space. On a line, you can only go back and forth (one fundamental direction with its backwards direction), but in a plane, you can go north and south or east and west (two fundamental direction) or a partial combination of two fundamental directions. \"Space\" is considered three-dimensional because we get the two fundamental directions of the plane, plus the up\/down direction. Physicists and mathematicians also work in spaces of dimension higher than three for some problems.  In this class, we will focus on two-dimensional space - \"the plane.\" Before we do that, it's useful to work in one-dimensional space - \"the line\" - first.  We model one-dimensional space as a single straight line as follows:  Axioms for One-Dimensional Analytic Geometry (\"The Line\")   Each point on the line corresponds to a unique real number  The distance between points corresponding to the real numbers and is  The point corresponding to the real number is to the left of the point corresponding to the real number if and only if   The three axioms above tell us how to coordinatize a line to make a number line. Each point gets paired with exactly one number, and we want this pairing to behave in a way that doesn't conflict with our usual way of thinking about real numbers: moving one way gives us bigger numbers, moving the other way gives us smaller numbers, and the distance between two numbers is the difference of the larger minus the smaller (or the negative of the smaller minus the larger - hence the need for absolute value bars if we don't actually know which number is larger when they are represented by variables).  Once we assign points to the real numbers and , the assignment of points to all other numbers is set automatically.  When we have two points on a line, we often want to find the midpoint between the two points:  Definition of Midpoint (on \"The Line\")  Geometric definition: the midpoint of two distinct points with coordinates and is a point between and such that the distance from to is the same as the distance from to Symbolically, the midpoint is the point with coordinate such that  Algebraic definition: the midpoint of two distinct points with coordinates and is a point with coordinate  Notice that I have given two definitions of midpoint! One is from a geometric perspective: it talks about distances between certain points being equal. The other is given by an algebraic formula involving the coordinates for the two points. This is often the case in analytic geometry! We are bridging the world where we think of things geometrically with the world where we think of things algebraically.  How do we know for sure, without exception, that these two definitions are really describing the same point? That's where the idea of mathematical proof comes in. You probably encountered two-column geometric proof in high school. Here, we will start to use algebraic proof as well to make sure the geometry and algebra ideas really do correspond to one another...  Theorem: Given two points and on a coordinate line, there is a point with coordinate between and such that if and only if  Proof: First, we must make sure that if there is a point where then is indeed the number we get from the formula Since the points corresponding to and are distinct, one of and must be greater than the other. Suppose Since is between and we know that Let be the distance between and (that is, let ) and between and (that is, let ), which we know to be equal. Then and Moreover, A similar result occurs if we were to let be less than Thus we have shown that if  is a point between the two points and with  then   Next, we must make sure that if then Hence, Thus we have shown that if   then the distance from to is the same as the distance from to  We have checked both directions of this \"if and only if\" statement, so the statement is true. QED  Notice that we used property of absolute value that has not been mentioned yet: This is because of how absolute values work! If you compare and the only difference is the negative sign (one is and the other is ). So when we take the absolute value, that negative sign gets \"eaten\" and the result is the same if we do or if we do This is an example of a prerequisite property that should make sense to you, and if it doesn't, you should review it from outside materials or ask me or a tutor about it.  Now that we have the axioms and the definition of midpoint, let's apply them to some problems!  Homework  Complete the following homework problems for Wednesday, January 24. These should essentially be review from previous courses. Where appropriate, show work that justifies your answers for full credit.   Draw a number line and label points with  and three other points of your choosing.  Is the point on a number line corresponding to the real number to the left of the point on the number line corresponding to the real number ? Explain why or why not.  Find the distance between the points associated with the real numbers and  What real numbers correspond to points that are a distance of units from the point that corresponds to ?  Find the distance on a number line between the point whose coordinate is and the point whose coordinate is  Plot the points on a number line whose coordinates satisfy the following equations using only exact values.          Find the coordinate of the midpoint between the point with coordinate and the point with coordinate  If the midpoint is between a point with coordinate and some other point, what is the coordinate of the other point?   "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
