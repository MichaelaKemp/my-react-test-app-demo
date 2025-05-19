import { fetchUserData } from "../src/utils/api";

describe ("Test API functionality", () => {


    beforeAll(() => {
        global.fetch = jest.fn();
    })

    afterEach(() => {
        jest.resetAllMocks();
    })

    test("fetchUserData should return valid data based on ID", async () => {

        const userId = 1;
        const expectedUser = {id: 1, name: 'Leanne Graham'};

      (fetch as jest.Mock).mockResolvedValueOnce({
            ok: true,
            json: async () => expectedUser
        });

        const result = await fetchUserData(userId);


        expect(result).toEqual(expectedUser);
        expect(fetch).toHaveBeenCalledWith(`https://jsonplaceholder.typicode.com/users/${userId}`);
    })


    test("fetchUserData should throw an error on network failure", async () => {

        const userId = 1;

        (fetch as jest.Mock).mockResolvedValueOnce({
            ok: false,
        });

        const result = fetchUserData(0);

        expect(result).rejects.toThrow('Network response was not ok');
        expect(fetch).toHaveBeenCalledWith(`https://jsonplaceholder.typicode.com/users/0`);
    })

})
