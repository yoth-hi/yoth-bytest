import Image from "next/image";
import Title from "../../../components/string";
/*
type PageDirectUser = {
  content: {
    renderDataUserDirect: {
      name: string;
    };
    renderMensagensList: any;
  };
};

const data: PageDirectUser = {
  content: {
    renderDataUserDirect: {
      name: "@Name",
    },
    renderMensagensList: [
      {
        key: crypto.randomUUID(),
        data: [
          {
            type: "text",
            data: "Olá",
          },
        ],
        who: "me", //me || no-me
      },
      {
        key: crypto.randomUUID(),
        data: [
          {
            type: "text",
            data: "Olá",
          },
        ],
        who: "me", //me || no-me
      },
      {
        key: crypto.randomUUID(),
        data: [
          {
            type: "text",
            data: "Olá",
          },
        ],
        who: "me", //me || no-me
      },
      {
        key: crypto.randomUUID(),
        data: [
          {
            type: "text",
            data: "Olá",
          },
        ],
        who: "me", //me || no-me
      },
      {
        key: crypto.randomUUID(),
        data: [
          {
            type: "text",
            data: "Olá",
          },
        ],
        who: "me", //me || no-me
      },
      {
        key: crypto.randomUUID(),
        data: [
          {
            type: "text",
            data: "Olá",
          },
        ],
        who: "me", //me || no-me
      },
      {
        key: crypto.randomUUID(),
        data: [
          {
            type: "text",
            data: "Olá",
          },
        ],
        who: "me", //me || no-me
      },
      {
        key: crypto.randomUUID(),
        data: [
          {
            type: "text",
            data: "Olá",
          },
        ],
        who: "me", //me || no-me
      },
      {
        key: crypto.randomUUID(),
        data: [
          {
            type: "text",
            data: "Olá",
          },
        ],
        who: "me", //me || no-me
      },
      {
        key: crypto.randomUUID(),
        data: [
          {
            type: "text",
            data: "Olá",
          },
        ],
        who: "me", //me || no-me
      },
      {
        key: crypto.randomUUID(),
        data: [
          {
            type: "text",
            data: "Olá",
          },
        ],
        who: "me", //me || no-me
      },
      {
        key: crypto.randomUUID(),
        data: [
          {
            type: "text",
            data: "Olá",
          },
        ],
        who: "me", //me || no-me
      },
      {
        key: crypto.randomUUID(),
        data: [
          {
            type: "text",
            data: "Olá",
          },
        ],
        who: "me", //me || no-me
      },
      {
        key: crypto.randomUUID(),
        data: [
          {
            type: "text",
            data: "Olá",
          },
        ],
        who: "no-me", //me | no-me
      },
      {
        key: crypto.randomUUID(),
        data: [
          {
            type: "image",
            data: require("../../../../public/android-chrome-192x192.png"),
          },
        ],
        who: "no-me", //me | no-me
      },
      {
        key: crypto.randomUUID(),
        data: [
          {
            type: "image",
            data: require("../../../../public/android-chrome-192x192.png"),
          },
        ],
        who: "no-me", //me | no-me
      },
      {
        key: crypto.randomUUID(),
        data: [
          {
            type: "image",
            data: require("../../../../public/android-chrome-192x192.png"),
          },
          {
            type:"text",
            data:"aa?"
          }
        ],
        who: "me", //me | no-me
      },
      {
        key: crypto.randomUUID(),
        data: [
          {
            type: "text",
            data: "Olá",
          },
        ],
        who: "no-me", //me | no-me
      },
      {
        key: crypto.randomUUID(),
        data: [
          {
            type: "image",
            data: require("../../../../public/android-chrome-192x192.png"),
          },
        ],
        who: "no-me", //me | no-me
      },
      {
        key: crypto.randomUUID(),
        data: [
          {
            type: "image",
            data: require("../../../../public/android-chrome-192x192.png"),
          },
        ],
        who: "no-me", //me | no-me
      },
      {
        key: crypto.randomUUID(),
        data: [
          {
            type: "image",
            data: require("../../../../public/android-chrome-192x192.png"),
          },
          {
            type:"text",
            data:"aa?"
          }
        ],
        who: "me", //me | no-me
      },
      {
        key: crypto.randomUUID(),
        data: [
          {
            type: "text",
            data: "Olá",
          },
        ],
        who: "me", //me || no-me
      },
      {
        key: crypto.randomUUID(),
        data: [
          {
            type: "text",
            data: "Olá",
          },
        ],
        who: "me", //me || no-me
      },
      {
        key: crypto.randomUUID(),
        data: [
          {
            type: "text",
            data: "Olá",
          },
        ],
        who: "me", //me || no-me
      },
      {
        key: crypto.randomUUID(),
        data: [
          {
            type: "text",
            data: "Olá",
          },
        ],
        who: "me", //me || no-me
      },
      {
        key: crypto.randomUUID(),
        data: [
          {
            type: "text",
            data: "Olá",
          },
        ],
        who: "me", //me || no-me
      },
      {
        key: crypto.randomUUID(),
        data: [
          {
            type: "text",
            data: "Olá",
          },
        ],
        who: "me", //me || no-me
      },
      {
        key: crypto.randomUUID(),
        data: [
          {
            type: "text",
            data: "Olá",
          },
        ],
        who: "me", //me || no-me
      },
      {
        key: crypto.randomUUID(),
        data: [
          {
            type: "text",
            data: "Olá",
          },
        ],
        who: "me", //me || no-me
      },
      {
        key: crypto.randomUUID(),
        data: [
          {
            type: "text",
            data: "Olá",
          },
        ],
        who: "me", //me || no-me
      },
      {
        key: crypto.randomUUID(),
        data: [
          {
            type: "text",
            data: "Olá",
          },
        ],
        who: "me", //me || no-me
      },
      {
        key: crypto.randomUUID(),
        data: [
          {
            type: "text",
            data: "Olá",
          },
        ],
        who: "me", //me || no-me
      },
      {
        key: crypto.randomUUID(),
        data: [
          {
            type: "text",
            data: "Olá",
          },
        ],
        who: "me", //me || no-me
      },
      {
        key: crypto.randomUUID(),
        data: [
          {
            type: "text",
            data: "Olá",
          },
        ],
        who: "me", //me || no-me
      },
      {
        key: crypto.randomUUID(),
        data: [
          {
            type: "text",
            data: "Olá",
          },
        ],
        who: "no-me", //me | no-me
      },
      {
        key: crypto.randomUUID(),
        data: [
          {
            type: "image",
            data: require("../../../../public/android-chrome-192x192.png"),
          },
        ],
        who: "no-me", //me | no-me
      },
      {
        key: crypto.randomUUID(),
        data: [
          {
            type: "image",
            data: require("../../../../public/android-chrome-192x192.png"),
          },
        ],
        who: "no-me", //me | no-me
      },
      {
        key: crypto.randomUUID(),
        data: [
          {
            type: "image",
            data: require("../../../../public/android-chrome-192x192.png"),
          },
          {
            type:"text",
            data:"aa?"
          }
        ],
        who: "me", //me | no-me
      },
      {
        key: crypto.randomUUID(),
        data: [
          {
            type: "text",
            data: "Olá",
          },
        ],
        who: "no-me", //me | no-me
      },
      {
        key: crypto.randomUUID(),
        data: [
          {
            type: "image",
            data: require("../../../../public/android-chrome-192x192.png"),
          },
        ],
        who: "no-me", //me | no-me
      },
      {
        key: crypto.randomUUID(),
        data: [
          {
            type: "image",
            data: require("../../../../public/android-chrome-192x192.png"),
          },
        ],
        who: "no-me", //me | no-me
      },
      {
        key: crypto.randomUUID(),
        data: [
          {
            type: "image",
            data: require("../../../../public/android-chrome-192x192.png"),
          },
          {
            type:"text",
            data:"aa?"
          }
        ],
        who: "me", //me | no-me
      },
    ],
  },
};*/
export default function (props: any) {
  return
  /* (
    <div className="direct-user">
      <div>
        <div>
          <div className="direct-user-header">
            <div className="direct-user-header-row">
              <div className="direct-user-header-image">
                <Image
                alt="image-alt"
                  className="bg-amber-50"
                  src={require("../../../../public/android-chrome-192x192.png")}
                />
              </div>
              <Title title={data.content.renderDataUserDirect.name} />
            </div>
            <div className="direct-user-header-row">
              <div className="direct-user-header-btn">O</div>
              <div className="direct-user-header-btn">O</div>
              <div className="direct-user-header-btn">O</div>
            </div>
          </div>
          <div>
            <div>
              {data.content.renderMensagensList.map((mansage_data, i) => (
                <div
                
                  id={"box-msg-"+mansage_data.key}
                  key={""+mansage_data.key}
                >
                  <>
                    <div>
                      {data.content.renderMensagensList[i - 1]?.who !==
                        data.content.renderMensagensList[i]?.who && (
                        <div>
                          <div className="direct-user-header-image">
                            <Image
                            alt="image-alt"
                              className="bg-amber-50"
                              src={require("../../../../public/android-chrome-192x192.png")}
                            />
                          </div>
                          <Title
                            title={data.content.renderDataUserDirect.name}
                          />
                        </div>
                      )}
                    </div>
                    <div
                      className={
                        (mansage_data.who === "me" ? "me-send" : "no-me-send") +
                        " direct-user-box-mensagen"
                      }
                      style={{
                        background:
                          mansage_data.who === "me" ? "#3332" : undefined,
                        color:
                          mansage_data.who === "me"
                            ? "rgb(var(--foreground-rgb))"
                            : undefined,
                        }}
                    >
                      {JSON.stringify(mansage_data)}
                      {mansage_data?.data.map((item) => (
                        <>
                          {item.type === "image" && (
                            <img src={item?.data.default?.src} />
                          )}
                          {item.type === "text" && <span>{item?.data} </span>}
                        </>
                      ))}
                    </div>
                  </>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );*/
}

//page-watch-primary => scroll
