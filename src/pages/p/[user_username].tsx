import { User } from "@prisma/client";
import { useRouter } from "next/router";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { Layout } from "../../components/layout/index";
import UserContext from "../../contexts/UserContext";
import { fetch_getUserByUsername } from "../../utils/fetchHelpers";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

export default function UserProfile(): JSX.Element {
  const currentUser: User = useContext(UserContext);
  const [profileUser, setProfileUser] = useState<User>(null);

  const router = useRouter();

  useEffect(() => {
    (async () => {
      const reqUsername = router.query.user_username?.toString();

      const fetchedUser: User = await fetch_getUserByUsername(reqUsername);

      if (JSON.stringify(profileUser) !== JSON.stringify(fetchedUser)) {
        setProfileUser(fetchedUser);
      }
    })();
  }, [profileUser, router.query.user_username]);

  return (
    <Layout>
      <div className="flex-1 flex items-center justify-center h-full max-h-[90vh] text-center mt-5 space-y-2">
        <div className="flex justify-center items-center space-x-3">
          {profileUser ? (
            <>
              <div className="relative w-28 h-28">
                <Image
                  alt="user-avatar"
                  src={profileUser.user_avatar}
                  layout="fill"
                />
              </div>
              <div>
                <h1 className="text-4xl">{profileUser.user_username}</h1>
                <section className="flex justify-center space-x-3">
                  <p>{profileUser.user_followers.length} Followers</p>
                  <p>{profileUser.user_following.length} Following</p>
                </section>
                <p>{profileUser.user_fullname}</p>
                <p>{profileUser.user_bio}</p>
              </div>
            </>
          ) : (
            <SkeletonTheme color="#0F172A" highlightColor="#1E293B">
              <Skeleton circle={true} height={44} width={44} />
              <Skeleton count={10} height={20} />
            </SkeletonTheme>
          )}
        </div>
      </div>
    </Layout>
  );
}
