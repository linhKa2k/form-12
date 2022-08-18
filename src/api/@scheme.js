import { REST_API_METHOD as METHOD, BASE_URL } from '../constants/index'

const API_SCHEME = {
  AUTHEN: {
    VALIDATE_TOKEN: {
      url: `${BASE_URL}/auth`,
      method: METHOD.GET,
    },
    LOGIN: {
      url: `${BASE_URL}/auth`,
      method: METHOD.GET,
    },
    LOGOUT: {
      url: `${BASE_URL}/logout`,
      method: METHOD.POST,
    },
  },
  //business API
  STATUS: {
    GET: {
      url: `${BASE_URL}/getS`,
      method: METHOD.GET,
    },
    ADD: {
      url: `${BASE_URL}/addS`,
      method: METHOD.POST,
    },
    UPDATE: {
      url: `${BASE_URL}/updateS/:id`,
      method: METHOD.PUT,
    },
    DELETE: {
      url: `${BASE_URL}/deleteS/:id`,
      method: METHOD.DELETE,
    },
  },
  USER: {
    GET: {
        url: `${BASE_URL}/getU`,
        method: METHOD.GET
    },
    ADD: {
        url: `${BASE_URL}/addU`,
        method: METHOD.POST
    },
    UPDATE: {
        url: `${BASE_URL}/updateU/:id`,
        method: METHOD.PUT
    },
    DELETE: {
        url: `${BASE_URL}/deleteU/:id`,
        method: METHOD.DELETE
    },
}
,
  ROLE: {
    GET: {
        url: `${BASE_URL}/getR`,
        method: METHOD.GET
    },
    ADD: {
        url: `${BASE_URL}/addR`,
        method: METHOD.POST
    },
    UPDATE: {
        url: `${BASE_URL}/updateR/:id`,
        method: METHOD.PUT
    },
    DELETE: {
        url: `${BASE_URL}/deleteR/:id`,
        method: METHOD.DELETE
    },
}
,
  ACCOUNT: {
    GET: {
        url: `${BASE_URL}/getA`,
        method: METHOD.GET
    },
    ADD: {
        url: `${BASE_URL}/addA`,
        method: METHOD.POST
    },
    UPDATE: {
        url: `${BASE_URL}/updateA/:id`,
        method: METHOD.PUT
    },
    DELETE: {
        url: `${BASE_URL}/deleteA/:id`,
        method: METHOD.DELETE
    },
}
,
  NUMBER: {
    GET: {
        url: `${BASE_URL}/getN`,
        method: METHOD.GET
    },
    ADD: {
        url: `${BASE_URL}/addN`,
        method: METHOD.POST
    },
    UPDATE: {
        url: `${BASE_URL}/updateN/:id`,
        method: METHOD.PUT
    },
    DELETE: {
        url: `${BASE_URL}/deleteN/:id`,
        method: METHOD.DELETE
    },
}
};

export default API_SCHEME;
