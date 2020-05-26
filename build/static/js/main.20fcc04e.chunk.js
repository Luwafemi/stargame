(this["webpackJsonpmy-app"] = this["webpackJsonpmy-app"] || []).push([
  [0],
  {
    10: function (e, t, a) {
      "use strict";
      a.r(t);
      var n = a(0),
        r = a.n(n),
        c = a(3),
        o = a.n(c),
        s = (a(9), a(1)),
        u = {
          sum: function (e) {
            return e.reduce(function (e, t) {
              return e + t;
            }, 0);
          },
          range: function (e, t) {
            return Array.from({ length: t - e + 1 }, function (t, a) {
              return e + a;
            });
          },
          random: function (e, t) {
            return e + Math.floor(Math.random() * (t - e + 1));
          },
          randomSumIn: function (e, t) {
            for (var a = [[]], n = [], r = 0; r < e.length; r++)
              for (var c = 0, o = a.length; c < o; c++) {
                var s = a[c].concat(e[r]),
                  i = u.sum(s);
                i <= t && (a.push(s), n.push(i));
              }
            return n[u.random(0, n.length - 1)];
          },
        },
        i = u,
        l = function (e) {
          return r.a.createElement(
            r.a.Fragment,
            null,
            " ",
            i.range(1, e.stars).map(function (e) {
              return r.a.createElement("div", { key: e, className: "star" });
            }),
            " "
          );
        };
      var m = {
          available: "lightgray",
          used: "lightgreen",
          wrong: "lightcoral",
          candidate: "deepskyblue",
        },
        d = function (e) {
          return r.a.createElement(
            "button",
            {
              className: "number",
              style: { backgroundColor: m[e.status] },
              onClick: function () {
                e.onClick(e.number, e.status);
              },
            },
            e.number,
            " "
          );
        };
      var f = function (e) {
          return r.a.createElement(
            "div",
            { className: "game-done" },
            r.a.createElement(
              "div",
              {
                className: "message",
                style: { color: "won" == e.gameStatus ? "Green" : "Red" },
              },
              "won" == e.gameStatus ? "Nice" : "Game Over",
              " "
            ),
            " ",
            r.a.createElement("button", { onClick: e.onClick }, " Play Again "),
            " "
          );
        },
        v = function () {
          var e = Object(n.useState)(i.random(1, 9)),
            t = Object(s.a)(e, 2),
            a = t[0],
            r = t[1],
            c = Object(n.useState)(i.range(1, 9)),
            o = Object(s.a)(c, 2),
            u = o[0],
            l = o[1],
            m = Object(n.useState)([]),
            d = Object(s.a)(m, 2),
            f = d[0],
            v = d[1],
            g = Object(n.useState)(10),
            b = Object(s.a)(g, 2),
            h = b[0],
            E = b[1];
          Object(n.useEffect)(function () {
            if (h > 0 && 0 != u)
              setTimeout(function () {
                E(h - 1);
              }, 1e3);
          });
          return {
            stars: a,
            availableNums: u,
            candidateNums: f,
            secondsLeft: h,
            setGameState: function (e) {
              if (i.sum(e) !== a) v(e);
              else {
                var t = u.filter(function (t) {
                  return !e.includes(t);
                });
                l(t), v([]), r(i.randomSumIn(t, 9));
              }
            },
          };
        },
        g = function (e) {
          var t = v(),
            a = t.stars,
            n = t.availableNums,
            c = t.candidateNums,
            o = t.secondsLeft,
            s = t.setGameState,
            u = i.sum(c) > a,
            m = 0 == n ? "won" : 0 == o ? "lost" : "active",
            g = function (e) {
              return n.includes(e)
                ? c.includes(e)
                  ? u
                    ? "wrong"
                    : "candidate"
                  : "available"
                : "used";
            },
            b = function (e, t) {
              if ("used" != t && 0 != o) {
                var a =
                  "available" == t
                    ? c.concat(e)
                    : c.filter(function (t) {
                        return t !== e;
                      });
                s(a);
              }
            };
          return r.a.createElement(
            "div",
            { className: "game", key: e.key },
            r.a.createElement(
              "div",
              { className: "help" },
              "Pick one or more numbers that sum to the number of stars.",
              " "
            ),
            " ",
            r.a.createElement(
              "div",
              { className: "body" },
              r.a.createElement(
                "div",
                { className: "left" },
                " ",
                "active" != m
                  ? r.a.createElement(f, {
                      onClick: e.resetGame,
                      gameStatus: m,
                    })
                  : r.a.createElement(l, { stars: a }),
                " "
              ),
              " ",
              r.a.createElement(
                "div",
                { className: "right" },
                " ",
                i.range(1, 9).map(function (e) {
                  return r.a.createElement(d, {
                    number: e,
                    status: g(e),
                    key: e,
                    onClick: b,
                  });
                }),
                " "
              ),
              " "
            ),
            " ",
            r.a.createElement(
              "div",
              { className: "timer" },
              " Time Remaining: ",
              o,
              " "
            ),
            " "
          );
        };
      var b = function () {
        var e = Object(n.useState)(1),
          t = Object(s.a)(e, 2),
          a = t[0],
          c = t[1];
        return r.a.createElement(g, {
          resetGame: function () {
            c(a + 1);
          },
          key: a,
        });
      };
      Boolean(
        "localhost" === window.location.hostname ||
          "[::1]" === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
          )
      );
      o.a.render(
        r.a.createElement(r.a.StrictMode, null, r.a.createElement(b, null)),
        document.getElementById("root")
      ),
        "serviceWorker" in navigator &&
          navigator.serviceWorker.ready
            .then(function (e) {
              e.unregister();
            })
            .catch(function (e) {
              console.error(e.message);
            });
    },
    4: function (e, t, a) {
      e.exports = a(10);
    },
    9: function (e, t, a) {},
  },
  [[4, 1, 2]],
]);
//# sourceMappingURL=main.20fcc04e.chunk.js.map
