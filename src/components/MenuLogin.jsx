"use client";
export default function ({ close }) {
  return (
    <div key={2e74}
      className="bg-modal-hover"
      onClick={(e) => {
        e.stopPropagation()
        if (close) {
          document.querySelector(".bg-modal-hover").classList.add("to-close");
          setTimeout(close, 300);
        }
      }}
    >
      <div className="modal-login" onClick={(e) => {
        e.stopPropagation();
      }}>
        <div className="modal-login--body">
          <div className="modal-login-title">
            <h1>Login with Yoth</h1>
          </div>
          <div>
            <div className="modal-login-content">
              <div className="modal-login-item">
                <div className="modal-login-item-login">
                  <img src="https://play-lh.googleusercontent.com/QLQzL-MXtxKEDlbhrQCDw-REiDsA9glUH4m16syfar_KVLRXlzOhN7tmAceiPerv4Jg" />
                </div>
              </div>
              <div className="modal-login-item">
                <div className="modal-login-item-login">
                  <img src="https://www.outsystems.com/forge/DownloadResource.aspx?FileName=&ImageBinaryId=43951" />
                </div>
              </div>
              <img />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
