import TabScreenWrapper from "@/s-components/layouts/TabsWrapper";
import SearchInput from "@/s-components/ui/SearchInput";

export default function () {
        return (
            <TabScreenWrapper>
                    <SearchInput city={'Milan'} onFilterPress={() => console.log('Filter clicked')}/>
                    {/*<Header/>*/}
                    {/*<NearbyTournamentsSection*/}
                    {/*    events={mockedEvents}*/}
                    {/*    onLocationSearch={() => console.log('Ricerca GPS')}*/}
                    {/*/>*/}
                    {/*<LoreCounterButton/>*/}
            </TabScreenWrapper>
        );
}