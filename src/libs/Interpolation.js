export default function (obj,name,callback){"use struct";obj=obj||{};
  obj[name]=function(props){
    var _arguments  = {
      [name]:callback,
      ...props,
      in:[name,arguments]
    };
    callback.call(obj,_arguments)
  }
}