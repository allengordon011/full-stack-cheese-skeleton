import 'isomorphic-fetch'; //for older browsers

export const asyncFetchAction = () => dispatch => {
    // DISPATCH LOADING INDICATOR ACTION
    return fetch('URL').then(res => {
        if (!res.ok) {
            throw new Error(res.statusText);
        }
        return res.json()
    }).then(data =>
        //DISPATCH SUCCESS ACTION
    ).catch(err =>
        //DISPATCH ERRO ACTION
    );
};

export const ACTION_CONSTANT_A = 'ACTION_CONSTANT_A';
export const actionCreatorA = () => ({
    type: ACTION_CONSTANT_A
});

export const ACTION_CONSTANT_B = 'ACTION_CONSTANT_B';
export const actionCreatorB = (data) => ({
    type: ACTION_CONSTANT_B,
    data
});

export const ACTION_CONSTANT_C = 'ACTION_CONSTANT_C';
export const actionCreatorC = (error) => ({
    type: ACTION_CONSTANT_C,
    error
});
