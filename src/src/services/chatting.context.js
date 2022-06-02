import React, { useState, useEffect, lodash, useContext } from "react";
import {
  getChatArchive,
  getUserDetail,
  getProductChats,
  CreateChatPool,
  CreateChatMessage,
  CreatefirstChat,
  DeleteChatArchive,
} from "./components/chatting.service";

import { UserContext } from "../services/user.contex";
export const ChattingContext = React.createContext();
export const ChattingProvider = ({ children }) => {
  const [ChatLength, setChatLength] = useState("");
  const [loadingChat, setloadingChat] = useState(false);
  const [chatArchive, setChatArchive] = useState([]);
  const [userData, setUserData] = useState();
  const [activeChatid, setactiveChatid] = useState();
  const [ReturnChats, setReturnChats] = useState([]);
  const [UserChatsLoading, setUserChatsLoading] = useState(false);
  const [Newchatid, setNewchatid] = useState("");
  const [madeLoop, setMadeloop] = useState([]);
  const [LastchatId, setLastchatId] = useState("");
  const [activeArchive, setactiveArchive] = useState([]);
  const makeChanges = () => {
    fetch("http://192.168.87.142:5001/getmessages", {
      method: "post",
      body: JSON.stringify({ sell: "punti", buy: "puntichor" }),
      headers: {
        ACCEPT: "application/json",
        "Content-Type": "application/json",
      },
    }).then((response) => response.json());
    // .then((response) => setsocketmessage(response));
  };

  const { username } = useContext(UserContext);

  const GetChatlist = (user) => {
    setloadingChat(true);
    getChatArchive(user)
      .then((response) => {
        setloadingChat(false);
        setChatArchive(response);
      })
      .catch((err) => {
        setloadingChat(false);
      });
  };

  const getUserchatData = (user) => {
    getUserDetail(user).then((response) => {
      setUserData(response);
    });
  };
  // this is for chats

  const PollMaker = (chatid) => {
    ProductChatPoll(chatid, activeChatid);
    return true;
  };
  const ProductChatPoll = (chatid, activeChatid) => {
    return CreateChatPool(chatid)
      .then((response) => {
        // console.log(response);
        var findInclude = ReturnChats.find((x) => x.id === chatid);
        if (response.data === "end") {
        } else {
          if (findInclude) {
            var removeChat = ReturnChats.filter((x) => x.id !== chatid);
            setReturnChats([
              ...removeChat,
              { id: response.data[0], content: response.data[1] },
            ]);
          } else {
            setReturnChats([
              ...ReturnChats,
              { id: response.data[0], content: response.data[1] },
            ]);
          }
        }
        // if (!response.data === "end") {
        //   console.log("on end", response.data);
        //   if (findInclude) {
        //     var removeChat = ReturnChats.filter((x) => x.id !== chatid);
        //     setReturnChats([
        //       ...removeChat,
        //       { id: response.data[0], content: response.data[1] },
        //     ]);
        //   } else {
        //     console.log("on set", response.data);
        //     setReturnChats([
        //       ...ReturnChats,
        //       { id: response.data[0], content: response.data[1] },
        //     ]);
        //   }
        // }
      })
      .finally(() => {
        return PollMaker(chatid);
      });
  };

  const getUserschat = (chatid) => {
    setUserData("");
    setactiveChatid(chatid);
    setUserChatsLoading(true);
    const filterActivearchive = activeArchive.find((x) => x === chatid);

    if (filterActivearchive) {
    } else {
      setactiveArchive([...activeArchive, chatid]);
    }
    return filterActivearchive
      ? null
      : getProductChats(chatid).then((response) => {
          var findInc = madeLoop.find((x) => x === chatid);
          // findInc ? null : setMadeloop([...madeLoop, chatid]);

          var findInclude = ReturnChats.find((x) => x.id === chatid);
          if (findInclude) {
            var removeChat = ReturnChats.filter((x) => x.id !== chatid);
            setReturnChats([
              ...removeChat,
              { id: response[0], content: response[1] },
            ]);
          } else {
            setReturnChats([
              ...ReturnChats,
              { id: response[0], content: response[1] },
            ]);
          }

          setUserChatsLoading(false);
          setTimeout(() => {
            !findInc && PollMaker(chatid);
          }, 1000);
        });
  };

  const createFirstchat = (buyer, seller, adid, chatText) => {
    CreatefirstChat(buyer, seller, adid, chatText).then((response) => {
      setChatArchive([...chatArchive, response[0]]);
      setLastchatId(response[1][0]);
      setReturnChats([
        ...ReturnChats,
        { id: response[1][0], content: [response[1][1]] },
      ]);
      setNewchatid(response[1][0]);
      PollMaker(response[1][0]);
    });
  };

  const CreateProductChat = (chatid, text, user) => {
    CreateChatMessage(chatid, text, user);
    var chatsMock = ReturnChats;
    var containingchat = chatsMock.find((x) => x.id === chatid);

    chatsMock = chatsMock.filter((x) => x.id !== chatid);
    var newExtexd = [
      ...containingchat.content,
      {
        chatid: chatid,
        date: Date(),
        id: containingchat.content.length + 55,
        text: text,
        userfrom: user,
      },
    ];

    var redySet = [...chatsMock, { content: newExtexd, id: containingchat.id }];
    containingchat && setReturnChats(redySet);

    // setReturnChats([
    //   ...ReturnChats,
    //   {
    //     id: ReturnChats.length,
    //     chatid: chatid,
    //     userfrom: user,
    //     text: text,
    //     date: new Date(),
    //   },
    // ]);
  };

  const deleteChatArchive = (chatid, userid) => {
    DeleteChatArchive(chatid, userid).then((response) => {
      setChatArchive(response);
    });
    setReturnChats(ReturnChats.filter((x) => x.id !== chatid));
  };
  // retrieving data from local machine
  useEffect(() => {
    const data = localStorage.getItem("chatarchive");
    setChatArchive(data ? JSON.parse(data) : []);
  }, []);
  useEffect(() => {
    const data = localStorage.getItem("userChats");
    setReturnChats(data ? JSON.parse(data) : []);
  }, []);
  // storing data for offline
  useEffect(() => {
    !chatArchive === undefined &&
      chatArchive.localStorage.setItem(
        "chatarchive",
        JSON.stringify(chatArchive)
      );
  }, [chatArchive]);
  useEffect(() => {
    !ReturnChats === undefined &&
      ReturnChats.localStorage.setItem(
        "userChats",
        JSON.stringify(ReturnChats)
      );
  }, [ReturnChats]);

  return (
    <ChattingContext.Provider
      value={{
        ChatLength,
        setChatLength,
        chatArchive,
        setChatArchive,
        GetChatlist,
        loadingChat,
        getUserchatData,
        userData,
        setUserData,
        getUserschat,
        ReturnChats,
        UserChatsLoading,
        makeChanges,
        CreateProductChat,
        ProductChatPoll,
        setactiveChatid,
        createFirstchat,
        Newchatid,
        setNewchatid,
        deleteChatArchive,
        LastchatId,
        setLastchatId,
      }}
    >
      {children}
    </ChattingContext.Provider>
  );
};
