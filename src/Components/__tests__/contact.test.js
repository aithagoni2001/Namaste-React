import { render,screen } from "@testing-library/react"
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("should test contact component",()=>{

    beforeAll(()=>{
        console.log("before all");
        
    });
    beforeEach(()=>{
        console.log("before each");
    });

    afterAll(()=>{
        console.log("after all");
        
    });

    afterEach(()=>{
        console.log("after each");
        
    })
    
it("should load heading in contact component",()=>{

    render(<Contact/>)

    const heading = screen.getByRole("heading")

    // Assertion
    expect(heading).toBeInTheDocument();
})
it("should load button in contact component",()=>{

    render(<Contact/>);

    const button= screen.getByRole("button");

    expect(button).toBeInTheDocument()
})
it("should load submit text in contact component",()=>{
    render(<Contact/>);

   const submit =screen.getByText("Submit");

   expect(submit).toBeInTheDocument();
})
it("should load input boxes in contact component",()=>{
    render(<Contact/>)
// querying
   const input= screen.getAllByRole("textbox");
//    console.log(input.length);
   
   expect(input.length).toBe(2);
//    expect(input.length).not.toBe(3);
})
})
