import TabScreenWrapper from "@/s-components/layouts/TabsWrapper";
import {mockedEvents} from "../../mocks/mockedEvents";
import NearbyTournamentsSection from "@/s-components/events/NearbyTournamentsSection";
import Search from "@/s-components/search/Search";

export default function () {
        return (
            <TabScreenWrapper>
                    <Search/>
                    <NearbyTournamentsSection events={mockedEvents}/>
            </TabScreenWrapper>
        );
}