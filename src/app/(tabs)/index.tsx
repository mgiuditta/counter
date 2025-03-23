import TabScreenWrapper from "@/s-components/layouts/TabsWrapper";
import SearchInput from "@/s-components/ui/SearchBar";
import {mockedEvents} from "../../mocks/mockedEvents";
import NearbyTournamentsSection from "@/s-components/events/NearbyTournamentsSection";

export default function () {
        return (
            <TabScreenWrapper>
                    <SearchInput city={'Milan'} onFilterPress={() => console.log('Filter clicked')}/>
                    <NearbyTournamentsSection events={mockedEvents}/>
                    {/*<LoreCounterButton/>*/}
            </TabScreenWrapper>
        );
}