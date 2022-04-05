import React from 'react';

const Blogs = () => {
    return (
        <div className=' w-[90%] mx-auto my-10'>
            <div>
                <h2 className='text-xl font-semibold mb-5'>What is Context API</h2>
                <hr />
                <p>
                    Despite React’s popularity, one of the biggest obstacles developers face when working with the library is components re-rendering excessively, slowing down performance and harming readability. Component re-rendering is especially damaging when developers need components to communicate with each other in a process known as prop drilling.
                    <br />
                    <br />
                    The new React Context API, introduced with React v.16.3, allows us to pass data through our component trees, giving our components the ability to communicate and share data at different levels. In this tutorial, we’ll explore how we can use React Context to avoid prop drilling. First, we’ll cover what prop drilling is and why we should avoid it.
                </p>
            </div>
            <div>
                <h2 className='text-xl font-semibold mb-5'>Difference between inline, inline-block</h2>
                <hr />
                <p>
                    When an element is styled with display:inline, it will not start on a new line, will only take up as much width as the content it contains, and will not cause a line break after it. <br /> <br /> The difference between an inline element and an inline-block element is that an inline-block element can take up specified width and height. But, it will also not start on a new line within its parent or cause a line break after it. 
                </p>
            </div>
            <div>
                <h2 className='text-xl font-semibold mb-5'>What is Semantic Tag</h2>
                <hr />
                <p>
                    When your HTML code starts interacting with the browser, the tags which have specific information on what to do and how to do are called HTML semantic tags. As a developer, you are an advocate of the code you plan to write. I have often observed that fast releases in agile, make developers forget the importance of Semantic HTML, as they hasten their delivery process on shorter deadlines. This is my attempt to help you recollect all the vital benefits brought by Semantic HTML in today’s modern web development.
                </p>
            </div>
        </div>
    );
};

export default Blogs;