import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import { act } from "react-dom/test-utils";
import MOCK_DATA from "../mockdata/mockrestaurantlist.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        },
    });
});

it("should render the Body component and handle search", async () => {
    await act(async () =>
        render(
            <BrowserRouter>
                <Body/>
            </BrowserRouter>
        )
    );

    const searchButton = screen.getByRole("button", { name:"Search" });
    console.log(searchButton);
    
    const searchinput = screen.getByTestId("searchbox");

    fireEvent.change(searchinput, { target: { value: "Pizza" } });
    fireEvent.click(searchButton);

    const Cards = screen.findAllByTestId("resCard");

    expect(Cards.length).toBe(5);
});
