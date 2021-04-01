<!--
 * @Descr
 * @Author: Fenghua Zhang
 * @Date: 2021-03-31 15:09:38
 * @LastEditTime: 2021-03-31 17:14:27
 * @LastEditors: Fenghua Zhang
-->

# egg-jwt 初探

## 什么是 egg-jwt?

我们都知道前后端交互离不开做用户验证,常见的有两种。

- 后端将 sessionId 写到用户的 cookie 里,用户每次请求都会通过 cookie 再把 sessionId 传给后端,从而达到用户验证的目的。
- 后端不保存 session 数据,生成令牌后传给前端做储存,前端每次请求后端时带上令牌,从而达到目的。jwt 就是该方案的代表

## 如何使用?

- 安装 egg-jwt

```
 npm i egg-jwt -S
```

- 在 egg plugin.ts 中配置

```
const plugin: EggPlugin = {
    jwt: {
        enable: true,
        package: 'egg-jwt'
    }
};
```

- 在 config.default.ts 中配置

```
config.jwt = {
    secret: "ylw",
};
```

- 在 service 中生成 token

```
const token = app.jwt.sign(
    {
        username: username,
    },
        app.config.jwt.secret,
    {
        expiresIn: "60m", // 过期时间
    }
);
```

- 接下来把生成的 token 返回给前端,前端在请求头里加上以下

```
config.headers.Authorization = token;
```

- 后端编写中间件后把需要验证身份的接口加上参数

```
//中间件 app\middleware\jwt.ts
module.exports = (options) => {
  return async function jwt(ctx, next) {
    const token = ctx.request.header.authorization;
    let decode: any;
    if (token) {
      try {
        // 解码token
        decode = ctx.app.jwt.verify(token, options.secret);
        console.log("🚀 ~ file: jwt.ts ~ line 17 ~ jwt ~ decode", decode);
        await next();
        console.log(decode);
      } catch (error) {
        ctx.status = 401;
        ctx.body = {
          message: error.message,
        };
        return;
      }
    } else {
      ctx.status = 401;
      ctx.body = {
        message: "没有token",
      };
      return;
    }
  };
};
```

```
  //app\router.ts
  const jwt = app.middleware.jwt(app.config.jwt);
  router.post("/user/getList", jwt, controller.user.getList);
```
