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
import AsyncStorage from "@react-native-async-storage/async-storage";

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

  const makeChanges = () => {
    fetch("http://192.168.87.142:5001/getmessages", {
      method: "post",
      body: JSON.stringify({ sell: "punti", buy: "puntichor" }),
      headers: {
        ACCEPT: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => setsocketmessage(response));
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
        var findInclude = ReturnChats.find((x) => x.id === chatid);
        if (!response.data === "end") {
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
      })
      .finally(() => {
        return PollMaker(chatid);
      });
  };
  const getUserschat = (chatid) => {
    setactiveChatid(chatid);
    setUserChatsLoading(true);
    return getProductChats(chatid).then((response) => {
      var findInc = madeLoop.find((x) => x === chatid);
      findInc ? null : setMadeloop([...madeLoop, chatid]);

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
  };

  // storing data for offline
  const StoreChatArchive = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("@chatarchive", jsonValue);
    } catch (e) {
      console.log("unable to store data", e);
    }
  };
  const StoreChatContent = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("@chatcontent", jsonValue);
    } catch (e) {
      console.log("unable to store data", e);
    }
  };
  // retreiving data for offline
  const RetrieveChatArchive = async () => {
    const RestoreChatArchive = (chatarchive) => {
      setChatArchive(chatarchive);
    };
    try {
      const jsonValue = await AsyncStorage.getItem("@chatarchive");
      return jsonValue != null
        ? RestoreChatArchive(JSON.parse(jsonValue))
        : null;
    } catch (e) {
      console.log("unable to retrieve data", e);
    }
  };
  const RetrieveChatContent = async () => {
    const RestoreChatContent = (chats) => {
      setReturnChats(chats);
    };
    try {
      const jsonValue = await AsyncStorage.getItem("@chatcontent");
      return jsonValue != null
        ? RestoreChatContent(JSON.parse(jsonValue))
        : null;
    } catch (e) {
      console.log("unable to retrieve data", e);
    }
  };
  // function workers
  useEffect(() => {
    RetrieveChatArchive();
    RetrieveChatContent();
  }, []);
  useEffect(() => {
    StoreChatArchive(chatArchive);
  }, [chatArchive]);
  useEffect(() => {
    StoreChatContent(ReturnChats);
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
      }}
    >
      {children}
    </ChattingContext.Provider>
  );
};
