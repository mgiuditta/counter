import TabScreenWrapper from "@/s-components/layouts/TabsWrapper";
import Search from "@/s-components/search/Search";

export default function () {
        return (
            <TabScreenWrapper>
                    <Search/>
                    {/*<NearbyTournamentsSection events={mockedEvents}/>*/}
            </TabScreenWrapper>
        );
}