class FAR {
  fetch(url: string, config: object | null, isRequestCostom: boolean): Promise<any> {
    let fetchProms: Promise<any>;
    if (isRequestCostom) {
      const req = new Request(url, config);
      fetchProms = fetch(req);
    } else {
      fetchProms = fetch(url, config);
    }
    return fetchProms.then(this.handleResponse);
  }

  handleResponse(response: Response): Promise<any> {
    const json = response.text().then(function (text: string): any {
      return JSON.parse(text);
    });
    return json;
  }
}

export default FAR;