"use client";
export default function ({ close }) {
  return (
    <div
      className="bg-modal-hover"
      onClick={() => {
        if (close) {
          document.querySelector(".bg-modal-hover").classList.add("to-close");
          setTimeout(close, 700);
        }
      }}
    >
      <div className="modal-login" onClick={() => {
        
      }}>
        <div >
          <div>
            <h1>Login of 3°</h1>
          </div>
          <div>
            <img />
            <div>
              <a>
                <div className="modal-login-item-login">
                  <img src="https://play-lh.googleusercontent.com/QLQzL-MXtxKEDlbhrQCDw-REiDsA9glUH4m16syfar_KVLRXlzOhN7tmAceiPerv4Jg" />
                </div>
              </a>
              <a>
                <div className="modal-login-item-login">
                  <img src="https://www.outsystems.com/forge/DownloadResource.aspx?FileName=&ImageBinaryId=43951" />
                </div>
              </a>
              <img />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
