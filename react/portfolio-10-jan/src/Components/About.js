import React from "react";
import xyz from "./images/loan.avif";






const About = () => {

    return (
        <div className="about">
            <h1>About Me</h1>
        {/* <img src="https://media.istockphoto.com/id/1571280178/photo/indian-trader-or-stock-market-broker-analyzing-company-financial-papers-before-investing-at.jpg?s=2048x2048&w=is&k=20&c=w6L6ODIO7mRY_QMYg0YKq168JmzKWoO7bu5iJEn_O_k=" /> */}

        <img src={xyz} alt="wealth" />
            <p>
                Hello, my name is [Prasanna], and I am a third-year student at
                [SVCE]. I am currently studying [major],
                with an emphasis on [MCA].
                I have always had a passion for writing and
                storytelling. Still, it wasn’t until the junior
                year that I began to take it seriously.
                In the past year or so, my writing has become more refined and polished.
                I have been able to apply what I’ve learned in school to help me
                write more effectively and convey my ideas more clearly.
                A resume paragraph, often called a summary,
                profile, or introduction, is a 2-4 sentence statement at
                the top of your resume highlighting your best skills, experiences,
                and achievements, tailored to the job to quickly show employers your
                value and convince them to read on. It should include years of experience,
                key hard/soft skills, quantifiable results (e.g., "improved engagement by 30%"),
                and relevant keywords from the job description to pass Applicant Tracking Systems
            </p>

        </div>
    )


}

export default About;